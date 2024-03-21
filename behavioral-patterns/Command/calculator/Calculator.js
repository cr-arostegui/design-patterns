export default class Calculator {
  value;

  constructor() {
    this.value = 0;
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
  }

  showResult() {
    console.log('Current Result is: ', this.value);
  }
}
