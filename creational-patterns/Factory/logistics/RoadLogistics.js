import Logistics from "./Logistics";
import Truck from "./Truck";

export default class RoadLogistics extends Logistics {
    static createTransport() {
        return new Truck();
    }
}