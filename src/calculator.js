const { parseDelimiter } = require('./helper/delimiterParser');
const { validateNoNegatives } = require('./helper/validator');


class StringCalculator {
  constructor() { }

  add(input) {
    if (!input) return 0;

    const { delimiter, numbers } = parseDelimiter(input);
    const values = numbers.split(delimiter).map(Number);

    validateNoNegatives(values);

    return values.reduce((sum, n) => sum + n, 0);
  }
}

module.exports = StringCalculator;
