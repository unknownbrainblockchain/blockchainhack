import express from "express"
import { Fluence, KeyPair } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import {registerGiveMeData, GiveMeDataDef, main as flunenceMain} from "./_aqua/main";
import { Listener } from "@listener-js/listener";
import cors from "cors"
import Http from "@listener-js/http";
import axios from "axios"
import bodyParser from "body-parser"
const app = express()
const port = 8080

let temp;
let temp1;


app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
    temp = req.query.data
    temp1 = req.query.data1
    await main().then(()=>{
        console.log("data")
        console.log("data",temp.data);
        res.json(temp.data)
    }).catch(e => console.log(e));
})

app.get('/send', (req, res) => {
    const address = req.query.data
    const block = req.query.data1
    axios.get(`http://127.0.0.1:5000/add?address=${address}&start_block=${block}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // main()

})

class GiveMeData implements GiveMeDataDef {
    async workWithDocker(data: string) {
        await axios.post("http://a1b3-86-62-78-69.ngrok.io/querry", {"query":"{\n  accounts(subgraphError: allow) {\n    membership {\n      account {\n        id\n      }\n    }\n  }\n}\n"}).then((data)=>{
            console.log("aqua")
            temp = data;
            return data
        }).finally(()=>{
            return "false"
        });
        return "false";
    }
}

async function statFluence() {
    await Fluence.start({
        KeyPair: await KeyPair.fromEd25519SK(
            Buffer.from('zuweWzWN9Di7GxQU/sKwFdX/Msgqoco9iGAuF6vaPwk=', 'base64')),
        connectTo: krasnodar[3]})
    console.log("PeerId: ", Fluence.getStatus().peerId);
    console.log("Relay id: ", Fluence.getStatus().relayPeerId);
    registerGiveMeData(new GiveMeData());
}

statFluence();

async function main() {
    const result = await flunenceMain(Fluence.getStatus().peerId, Fluence.getStatus().relayPeerId, "test");
    console.log("main data",JSON.stringify(result))
    // await Fluence.stop();
}
      

      
