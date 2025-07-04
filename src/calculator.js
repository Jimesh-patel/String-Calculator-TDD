class StringCalculator {
    constructor() { }  

    add(numbers) { 
        if (numbers === "") 
            return 0;

        return Number(numbers);
    }

}

module.exports = StringCalculator;
  