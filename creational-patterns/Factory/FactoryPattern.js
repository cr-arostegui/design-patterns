import Pattern from '../../Pattern';
import RoadLogistics from './logistics/RoadLogistics';
import SeaLogistics from './logistics/SeaLogistics';

export default class SingletonPattern extends Pattern {
  static run() {
    console.log('---- Factory ----')
    const isLocationClose = true;
    let transport;

    if (isLocationClose) {
        transport = RoadLogistics.createTransport();
    } else {
        transport = SeaLogistics.createTransport();
    }

    transport.deliver();
  }
}
