import IStrategy from './IStrategy';

class ConcreteStrategyAdd extends IStrategy {
    execute(a, b) {
        return a + b;
    }
}

export default ConcreteStrategyAdd;