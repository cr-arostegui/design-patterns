class RemoteControl {
    device;

    constructor(device) {
        this.device = device;
    }

    togglePower() {
        if (this.device.isEnabled()) {
            this.device.disable();
        } else {
            this.device.enable();
        }

        console.log(`*** Device ${this.device.isEnabled() ? 'enabled' : 'disabled'}`);
    }

    volumeDown() {
        this.device.setVolume(this.device.getVolume() - 1);
        this.displayVolume();
    }

    volumeUp() {
        this.device.setVolume(this.device.getVolume() + 1);
        this.displayVolume();
    }

    channelDown() {
        this.device.setChannel(this.device.getChannel() - 1);
        this.displayChannel();
    }

    channelUp() {
        this.device.setChannel(this.device.getChannel() + 1);
        this.displayChannel();
    }

    displayVolume() {
        console.log('*** Volume: ', this.device.getVolume());
    }

    displayChannel() {
        console.log('*** Channel: ', this.device.getChannel());
    }
}

export default RemoteControl;