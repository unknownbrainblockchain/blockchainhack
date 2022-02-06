import { Fluence, KeyPair } from "@fluencelabs/fluence";
import { krasnodar } from "@fluencelabs/fluence-network-environment";
import { registerGiveMeData, GiveMeDataDef } from "./_aqua/main";
import { listener } from "@listener-js/listener";
import { http } from "@listener-js/http";
import { axios }

class GiveMeData implements GiveMeDataDef {
    async function getFromPeer() {
        listener({ http });
        const url = "127.0.0.1:8080" // поменять адрес и порт
        const data = await http.fetch([], url)

        return data
    }

    async function workWithDocker(data: string) {
        let new_data = await axios.post("127.0.0.1:3000", { // поменять адрес и порт
            data: getFromPeer()
          });

        return new_data
    }

    async function returnDataToPeer(new_data: string) {
        await axios.post("127.0.0.1:8080", { // поменять адрес и порт
            new_data: workWithDocker(new_data)
        });
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