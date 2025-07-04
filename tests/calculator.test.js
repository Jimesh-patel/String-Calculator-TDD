const StringCalculator = require('../src/calculator');

describe('String Calculator', () => {

    test('should return 0 for an empty string', () => {
        const calc = new StringCalculator();
        expect(calc.add("")).toBe(0);
    });

    test('should return the number itself if a single number is provided', () => {
        const calc = new StringCalculator();
        expect(calc.add("2")).toBe(2); 
    });
      
});
