import Command from './Command';

export default class SubstractCommand extends Command {
  value;

  constructor(value) {
    super();
    this.value = value;
  }

  execute(currentValue) {
    return currentValue - this.value;
  }
}
