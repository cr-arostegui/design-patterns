import Pattern from '../../Pattern';
import Counter from './Counter/Counter';

export default class SingletonPattern extends Pattern {
  static run() {
    console.log('---- Singleton ----')
    console.log('Current value: ', Counter.getCount());
    console.log('Increment');
    Counter.increment();
    console.log('Current value: ', Counter.getCount());
    console.log('Increment');
    Counter.increment();
    console.log('Current value: ', Counter.getCount());
    console.log('Decrement');
    Counter.decrement();
    console.log('Current value: ', Counter.getCount());
  }
}
