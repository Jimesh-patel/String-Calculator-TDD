function validateNoNegatives(numbers) {
    const negatives = numbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
    }
}

module.exports = { validateNoNegatives };
  