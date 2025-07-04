class StringCalculator {
    constructor() { }  

    add(numbers) {
        if (!numbers) return 0;

        let delimiter = /[\n,]/;
        if (numbers.startsWith('//')) {
            const delimiterLine = numbers.split('\n')[0];
            delimiter = new RegExp(numbers[2]);  
            numbers = numbers.split('\n')[1];
        }

        return numbers
            .split(delimiter)
            .map(Number)
            .reduce((sum, n) => sum + n, 0);
    }      
      
}

module.exports = StringCalculator;
  