const parseDelimiter = require('./helper/delimiterParser');

class StringCalculator {
    constructor() { }

    add(input) {
        if (!input) return 0;

        const { delimiter, numbers } = parseDelimiter(input);
        const values = numbers.split(delimiter).map(Number);

        const negatives = values.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
        }

        return values.reduce((sum, n) => sum + n, 0);
    }
}

module.exports = StringCalculator;
