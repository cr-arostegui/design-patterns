import Pattern from '../../Pattern';
import ConcreteStrategyAdd from './arithmetic-operations/ConcreteStrategyAdd';
import ConcreteStrategyMultiply from './arithmetic-operations/ConcreteStrategyMultiply';
import ConcreteStrategySubtract from './arithmetic-operations/ConcreteStrategySubtract';
import Context from './arithmetic-operations/Context';

const ACTION = {
    add: 'addition',
    subtract: 'subtraction',
    multiply: 'multiplication',
};

export default class StrategyPattern extends Pattern {
  static run() {
    console.log('---- Strategy ----')
    const context = new Context();
    const action = ACTION.add;

    switch (action) {
        case ACTION.add:
            context.setStrategy(new ConcreteStrategyAdd());
            break;

        case ACTION.subtract:
            context.setStrategy(new ConcreteStrategySubtract());
            break;

        case ACTION.multiply:
            context.setStrategy(new ConcreteStrategyMultiply());
            break;
    }

    const result = context.executeStrategy(2, 2);

    console.log(`Action "${action}" - Result: ${result}`);
  }
}
