import { Fluence, KeyPair } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import { registerGiveMeData, GiveMeDataDef } from "./_aqua/main";
import { Listener } from "@listener-js/listener";
import http from "@listener-js/http";
import axios from "axios"

class GiveMeData implements GiveMeDataDef {
    async getFromPeer() {
        new Listener("id");
        const url = "127.0.0.1:8080" // поменять адрес и порт
        const _data = await http.fetch([], url)

        return _data
    }

    async workWithDocker(data: string) {
        let new_data = await axios.post("127.0.0c.1:3000", { // поменять адрес и порт
            data: this.getFromPeer()
          });

        return new_data
    }

    async returnDataToPeer(data: string) {
        await axios.post("127.0.0.1:8080", { // поменять адрес и порт
            new_data: this.workWithDocker(data)
        });

        return "ok"
    }

}

async function main() { 
    console.log("PeerId: ", Fluence.getStatus().peerId);
    console.log("Relay id: ", Fluence.getStatus().relayPeerId);

    registerGiveMeData("GiveMeData", new GiveMeData());
      
    console.log("crtl-c to exit");
        // await Fluence.stop();
}
      
main();