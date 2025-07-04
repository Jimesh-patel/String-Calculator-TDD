class StringCalculator {
    constructor() { }  

    add(numbers) { 
        
        if (numbers === "") 
            return 0;

        const nums = numbers.split(',').map(Number);
        return nums.reduce((sum, n) => sum + n, 0);

    }

}

module.exports = StringCalculator;
  