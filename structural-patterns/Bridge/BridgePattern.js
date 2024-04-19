import Pattern from '../../Pattern';
import AdvancedRemoteControl from './remote-control/AdvancedRemoteControl';
import RemoteControl from './remote-control/RemoteControl';
import Radio from './remote-control/Radio';
import TV from './remote-control/TV';

export default class BridgePattern extends Pattern {
  static run() {
    console.log('**** RADIO Remote Control ****');
    const radio = new Radio();
    const radioRemote = new RemoteControl(radio);
    radioRemote.togglePower(); // Radio enabled

    radioRemote.volumeUp(); // Volume 1
    radioRemote.volumeUp(); // Volume 2
    radioRemote.volumeDown(); // Volume 1

    radioRemote.channelUp(); // Station 101
    radioRemote.channelUp(); // Station 102
    radioRemote.channelDown(); // Station 101

    console.log('**** TV Remote Control ****');
    const tv = new TV();
    const tvRemote = new AdvancedRemoteControl(tv);
    tvRemote.togglePower(); // TV enabled

    tvRemote.volumeUp(); // Volume 1
    tvRemote.volumeUp(); // Volume 2
    tvRemote.volumeUp(); // Volume 3
    tvRemote.volumeDown(); // Volume 2

    tvRemote.channelDown(); // Channel 99
    tvRemote.channelDown(); // Channel 98
    tvRemote.channelUp(); // Channel 99

    console.log('Mute');
    tvRemote.mute();
  }
}
