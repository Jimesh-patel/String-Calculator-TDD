class StringCalculator {
    constructor() { }  

    add(numbers) {
        if (!numbers) return 0;

        return numbers
            .split(/[\n,]/)   
            .map(Number)
            .reduce((sum, n) => sum + n, 0);

    }
      
}

module.exports = StringCalculator;
  