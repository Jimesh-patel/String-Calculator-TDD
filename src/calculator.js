const { parseDelimiter } = require('./helper/delimiterParser');
const { validateNoNegatives } = require('./helper/validator');


class StringCalculator {
  constructor() {
    this.callCount = 0;
  }

  add(input) {
    this.callCount++;

    if (!input) return 0;

    const { delimiter, numbers } = parseDelimiter(input);
    const values = numbers.split(delimiter).map(Number);

    validateNoNegatives(values);

    return values.reduce((sum, n) => sum + n, 0);
  }

  getCalledCount() {
    return this.callCount;
  }
}


module.exports = StringCalculator;
