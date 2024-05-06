import Transport from "./Transport";

export default class Truck extends Transport {
    deliver() {
        console.log('deliver by land in a box');
    }
}