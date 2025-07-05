function parseDelimiter(input) {
    if (!input.startsWith('//')) {
        return {
            delimiter: /[\n,]/, 
            numbers: input,
        };
    }

    const [delimiterLine, numbers] = input.split('\n');

    const customDelimiter = extractBracketedDelimiter(delimiterLine);
    if (customDelimiter) {
        return {
            delimiter: new RegExp(escapeRegExp(customDelimiter)),
            numbers,
        };
    }

    const singleDelimiter = delimiterLine.slice(2);
    return {
        delimiter: new RegExp(escapeRegExp(singleDelimiter)),
        numbers,
    };
}

function extractBracketedDelimiter(line) {
    const match = line.match(/\[(.+)\]/);
    return match ? match[1] : null;
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { parseDelimiter };
  