import express from "express"
import { Fluence, KeyPair } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import {registerGiveMeData, GiveMeDataDef, main as flunenceMain} from "./_aqua/main";
import { Listener } from "@listener-js/listener";
import Http from "@listener-js/http";
import axios from "axios"
import bodyParser from "body-parser"
const app = express()
const port = 8080
let temp;


app.use(bodyParser.json())

app.get('/', (req, res) => {
    main().catch(e => console.log(e));
    res.json(req.query)
    
})

app.get('/send', (req, res) => {
    // main();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // main()
    
})

class GiveMeData implements GiveMeDataDef {
    async workWithDocker(data: string) {
        // await axios.post("127.0.0.1:3000", { // поменять адрес и порт
        //     data: temp
        //   }).then((data)=>{
        //     return data
        // }).finally(()=>{
        //     return "false"
        // });
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
    
    const res = await flunenceMain(Fluence.getStatus().peerId, Fluence.getStatus().relayPeerId, "test");

    console.log(res)
    // await Fluence.stop();
}
      

      
