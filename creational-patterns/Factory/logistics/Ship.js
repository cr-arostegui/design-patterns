import Transport from "./Transport";

export default class Ship extends Transport {
    deliver() {
        console.log('deliver by sea in a container');
    }
}