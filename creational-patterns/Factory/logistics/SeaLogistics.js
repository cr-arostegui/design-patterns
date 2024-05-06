import Logistics from "./Logistics";
import Ship from "./Ship";

export default class SeaLogistics extends Logistics {
    static createTransport() {
        return new Ship();
    }
}