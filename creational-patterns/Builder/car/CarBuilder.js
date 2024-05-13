import Builder from './Builder';
import Car from './Car';

export default class CarBuilder extends Builder {
    #car;

    reset() {
        this.#car = new Car();
    }

    setSeats(number) {
        console.log(`Adding ${number} of seats`);
    }

    setEngine(engine) {
        console.log(`Adding ${engine} engine`);
    }

    setTripComputer() {
        console.log('Adding Trip Computer');
    }

    setGPS() {
        console.log('Adding GPS');
    }

    getProduct() {
        return this.#car;
    }
}