import IStrategy from './IStrategy';

class ConcreteStrategyMultiply extends IStrategy {
    execute(a, b) {
        return a * b;
    }
}

export default ConcreteStrategyMultiply;