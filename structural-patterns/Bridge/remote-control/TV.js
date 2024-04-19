import Device from "./Device";

class TV extends Device {
    #enable = false;

    #volume = 0;

    #channel = 100;

    isEnabled() {
        return this.#enable;
    }

    enable() {
        this.#enable = true;
    }

    disable() {
        this.#enable = false;
    }

    getVolume() {
        return this.#volume;
    }

    setVolume(percent) {
        this.#volume = percent;
    }

    getChannel() {
        return this.#channel;
    }

    setChannel(channel) {
        this.#channel = channel;
    }
}

export default TV;