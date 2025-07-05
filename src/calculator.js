const parseDelimiter = require('./helper/delimiterParser');

class StringCalculator {
    constructor() { }

    add(input) {
        if (!input) return 0;

        const { delimiter, numbers } = parseDelimiter(input);
        const values = numbers.split(delimiter).map(Number);

        const firstNegative = values.find(n => n < 0);
        if (firstNegative !== undefined) {
            throw new Error(`negatives not allowed: ${firstNegative}`);
        }

        return values.reduce((sum, n) => sum + n, 0);
    }
}

module.exports = StringCalculator;
