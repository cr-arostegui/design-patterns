import Command from './Command';

export default class AddCommand extends Command {
  value;

  constructor(value) {
    super();
    this.value = value;
  }

  execute(currentValue) {
    return currentValue + this.value;
  }
}
