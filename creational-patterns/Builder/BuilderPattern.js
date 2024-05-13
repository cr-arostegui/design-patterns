import Pattern from '../../Pattern';
import CarBuilder from './car/CarBuilder';
import CarManualBuilder from './car/CarManualBuilder';
import Director from './car/Director';

export default class BuilderPattern extends Pattern {
  static run() {
    console.log('---- Builder ----')
    const director = new Director();

    const carBuilder = new CarBuilder();
    director.makeSUV(carBuilder);
    const car = carBuilder.getProduct();

    const carManualBuilder = new CarManualBuilder();
    director.makeSUV(carManualBuilder);
    const manual = carManualBuilder.getProduct();
  }
}
