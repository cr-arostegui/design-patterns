import Builder from './Builder';
import CarManual from './CarManual';

export default class CarManualBuilder extends Builder {
    #manual;

    reset() {
        this.#manual = new CarManual();
    }

    setSeats(number) {
        console.log(`Adding ${number} of seats in manual`);
    }

    setEngine(engine) {
        console.log(`Adding ${engine} engine specs in manual`);
    }

    setTripComputer() {
        console.log('Adding Trip Computer specs in manual');
    }

    setGPS() {
        console.log('Adding GPS specs in manual');
    }

    getProduct() {
        return this.#manual;
    }
}