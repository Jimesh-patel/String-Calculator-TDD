const { validateNoNegatives } = require('../src/helper/validator');
const { parseDelimiter } = require('../src/helper/delimiterParser');

describe('parseDelimiter()', () => {
    test('should return default delimiters for normal input', () => {
        const result = parseDelimiter("1,2\n3");
        expect(result.delimiter).toEqual(/[\n,]/);
        expect(result.numbers).toBe("1,2\n3");
    });

    test('should return custom delimiter when defined', () => {
        const result = parseDelimiter("//;\n1;2;3");
        expect(result.delimiter).toEqual(/;/);
        expect(result.numbers).toBe("1;2;3");
    });

    test('should handle single-char custom delimiter correctly', () => {
        const result = parseDelimiter("//#\n4#5#6");
        expect(result.delimiter).toEqual(/#/);
        expect(result.numbers).toBe("4#5#6");
    });
});


describe('validateNoNegatives()', () => {
    test('should not throw when all numbers are positive', () => {
        expect(() => validateNoNegatives([1, 2, 3])).not.toThrow();
    });

    test('should throw error for one negative number', () => {
        expect(() => validateNoNegatives([1, -2, 3]))
            .toThrow("negatives not allowed: -2");
    });

    test('should throw error listing all negative numbers', () => {
        expect(() => validateNoNegatives([-1, 2, -5]))
            .toThrow("negatives not allowed: -1, -5");
    });
});


