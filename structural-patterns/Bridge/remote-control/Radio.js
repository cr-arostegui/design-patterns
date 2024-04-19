import Device from "./Device";

class Radio extends Device {
    #enable = false;

    #volume = 0;

    #station = 100;

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
        return this.#station;
    }

    setChannel(station) {
        this.#station = station;
    }
}

export default Radio;