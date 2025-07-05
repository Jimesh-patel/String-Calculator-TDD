const { parseDelimiter } = require('./helper/delimiterParser');
const { validateNoNegatives } = require('./helper/validator');


class StringCalculator {
  constructor() {
    this.callCount = 0;
    this.AddOccured = null;  
  }

  add(input) {
    this.callCount++;

    if (!input) {
      if (this.AddOccured) this.AddOccured(input, 0);
      return 0;
    }

    const { delimiter, numbers } = parseDelimiter(input);
    const values = numbers
      .split(delimiter)
      .map(Number)
      .filter(n => n <= 1000);

    validateNoNegatives(values);

    const result = values.reduce((sum, n) => sum + n, 0);

    if (this.AddOccured) {
      this.AddOccured(input, result);
    }

    return result;
  }

  getCalledCount() {
    return this.callCount;
  }
}

module.exports = StringCalculator;
