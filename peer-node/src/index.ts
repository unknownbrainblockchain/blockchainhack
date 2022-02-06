import express from "express"
import { Fluence, KeyPair } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import {registerGiveMeData, GiveMeDataDef, getFromPeer} from "./_aqua/main";
import { Listener } from "@listener-js/listener";
import Http from "@listener-js/http";
import axios from "axios"
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/send', (req, res) => {
    main();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    main();
})

class GiveMeData implements GiveMeDataDef {
    async getFromPeer() {
        const url = "127.0.0.1:8080" // поменять адрес и порт
        const _data = await Http.fetch([], url)

        return "str"
    }

    async workWithDocker(data: string) {
        let new_data = await axios.post("127.0.0c.1:3000", { // поменять адрес и порт
            data: this.getFromPeer()
          });

        return "str"
    }

    async returnDataToPeer(data: string) {
        await axios.post("127.0.0.1:8080", { // поменять адрес и порт
            new_data: this.workWithDocker(data)
        });

        return "ok"
    }
}


async function main() {
    await Fluence.start({connectTo: krasnodar[4]})
    console.log("PeerId: ", Fluence.getStatus().peerId);
    console.log("Relay id: ", Fluence.getStatus().relayPeerId);

    registerGiveMeData("GiveMeData", new GiveMeData());

    console.log("crtl-c to exit");
    await Fluence.stop();
}
      
