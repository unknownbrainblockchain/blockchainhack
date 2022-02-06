import express from "express"
import { Fluence, KeyPair } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import {registerGiveMeData, GiveMeDataDef} from "./_aqua/main";
import { Listener } from "@listener-js/listener";
import Http from "@listener-js/http";
import axios from "axios"
import bodyParser from "body-parser"
import cors from "cors"
const app = express()
const port = 8080
let temp;


app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res) => {
    const a = {data: req.query.data, lol: "a"}
    res.json(a)

    // main()
})

app.get('/send', (req, res) => {
    // main();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    main();
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
        return "1";
    }
}


async function main() {
    await Fluence.start({connectTo: krasnodar[3]})
    console.log("PeerId: ", Fluence.getStatus().peerId);
    console.log("Relay id: ", Fluence.getStatus().relayPeerId);
    registerGiveMeData("GiveMeData", new GiveMeData());
    // await Fluence.stop();
}
      
