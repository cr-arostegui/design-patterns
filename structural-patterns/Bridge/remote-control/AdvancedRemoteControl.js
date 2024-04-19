import RemoteControl from "./RemoteControl";

class AdvancedRemoteControl extends RemoteControl {
    constructor(device) {
        super(device);
    }

    mute () {
        this.device.setVolume(0);
        this.displayVolume();
    }
}

export default AdvancedRemoteControl;