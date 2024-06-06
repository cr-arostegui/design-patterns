class Context {
    #strategy;

    setStrategy(strategy) {
        this.#strategy = strategy;
    }

    executeStrategy(a, b) {
        return this.#strategy.execute(a, b);
    }

}

export default Context;