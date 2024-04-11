// CALCULATOR
import Pattern from '../../Pattern';
import AddCommand from './calculator/AddCommand';
import Calculator from './calculator/Calculator';
import SubstractCommand from './calculator/SubstractCommand';

export default class CommandPattern extends Pattern {
  static run() {
    console.log('---- Command ----')
    const calc = new Calculator();
    calc.showResult(); // 0
    console.log('Execute AddCommand(4)');
    calc.executeCommand(new AddCommand(4)); // +4
    calc.showResult(); // 4
    console.log('Execute AddCommand(6)');
    calc.executeCommand(new AddCommand(6)); // +6
    calc.showResult(); // 10
    console.log('Execute SubstractCommand(4)');
    calc.executeCommand(new SubstractCommand(5)); // -5
    calc.showResult(); // 5
  }
}
