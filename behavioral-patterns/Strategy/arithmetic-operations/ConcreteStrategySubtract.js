import IStrategy from './IStrategy';

class ConcreteStrategySubtract extends IStrategy {
    execute(a, b) {
        return a - b;
    }
}

export default ConcreteStrategySubtract;