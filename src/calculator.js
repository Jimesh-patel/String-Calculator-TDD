const parseDelimiter = require('./helper/delimiterParser');

class StringCalculator {
    constructor() { }

    add(input) {
        if (!input) return 0;

        const { delimiter, numbers } = parseDelimiter(input);

        return numbers
            .split(delimiter)
            .map(Number)
            .reduce((sum, n) => sum + n, 0);
    }
}

module.exports = StringCalculator;
