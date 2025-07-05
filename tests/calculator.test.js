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

    test('should return the sum of two numbers separated by a comma', () => {
        const calc = new StringCalculator();
        expect(calc.add("1,2")).toBe(3);  
    });      

    test('should return the sum of any amount of comma-separated numbers', () => {
        const calc = new StringCalculator();
        expect(calc.add("1,2,3,4")).toBe(10);  
    });      

    test('should handle newline as a valid delimiter along with comma', () => {
        const calc = new StringCalculator();
        expect(calc.add("1\n2,3")).toBe(6);  
    });      

    test('should support custom delimiter', () => {
        const calc = new StringCalculator();
        expect(calc.add("//;\n1;2")).toBe(3); 
    });

    test('should throw error if input contains a negative number', () => {
        const calc = new StringCalculator();
        expect(() => calc.add("1,-2,3")).toThrow("negatives not allowed: -2");
    });

    test('should throw error listing all negative numbers', () => {
        const calc = new StringCalculator();
        expect(() => calc.add("1,-2,-5,3")).toThrow("negatives not allowed: -2, -5");
    });

    test('should track how many times add() was called', () => {
        const calc = new StringCalculator();

        calc.add("1,2");
        calc.add("3");
        calc.add("");

        expect(calc.getCalledCount()).toBe(3); 
    });      
      
});
