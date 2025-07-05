function parseDelimiter(input) {
    if (input.startsWith('//')) {
        const [delimiterLine, numbers] = input.split('\n');
        const delimiter = delimiterLine.slice(2);
        return { delimiter: new RegExp(delimiter), numbers };
    }
    return { delimiter: /[\n,]/, numbers: input };
}

module.exports = { parseDelimiter };
  