let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error('Not able to create multiple instances');
        }

        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

// Make sure that consuming code cannot modify the Singleton
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;