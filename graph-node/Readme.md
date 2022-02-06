**RUN SERVER**

Open docker-compose.yml located in:
graph-node/docker/docker-compose.yml

Replace mainnet:https://mainnet.infura.io/v3/2c2bf59b4f644fba98559c90281c00b4 with your RPC url in docker-compose.yml 


Go to graph-node/docker and run
./setup.sh

docker-compose up

cd custom-subgraph
npm i @openzeppelin/subgraphs

python3 app.py

**API:**

GET: http://127.0.0.1:5000/add  
params: address, start_block

POST: http://127.0.0.1:5000/querry  
body: {"query":"subgraph querry"}
returns json with data from subgraph
