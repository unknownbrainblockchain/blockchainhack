import requests
from flask import Flask, request

app = Flask(__name__)
import os


def add_(address, start_block=0):
    with open("configs/config.json", 'r')as f:
        data = f.read()
        data = data.replace("put_address", address)
        data = data.replace("put_start_block", str(start_block))
        with open("configs/real.json", 'w')as g:
            g.write(data)

    os.system(
        'npx graph-compiler --config configs/real.json --include node_modules/@openzeppelin/subgraphs/src/datasources --export-schema --export-subgraph ')
    os.system('graph create generated/sample --node http://127.0.0.1:8020')
    os.system(
        'graph deploy --ipfs http://localhost:5001 --node http://localhost:8020 generated/sample ./generated/sample.subgraph.yaml --version-label')
    return "good"


def graph_request(querry):
    res = requests.post('http://localhost:8000/subgraphs/name/generated/sample', data=querry)
    return res.text


@app.route('/add', methods=['GET'])
def add():
    address = request.args.get('address')
    start_block = request.args.get('start_block', default=0)
    return add_(address, start_block)


@app.route('/querry', methods=['POST'])
def querry():
    querry = request.data
    return graph_request(querry)


if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)
