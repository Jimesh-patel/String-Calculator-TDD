function parseDelimiter(input) {
    if (!input.startsWith('//')) {
        return {
            delimiter: /[\n,]/,
            numbers: input,
        };
    }

    const [delimiterLine, numbers] = input.split('\n');

    const multipleDelimiters = delimiterLine.match(/\[([^\]]+)\]/g);

    if (multipleDelimiters) {
        const rawDelimiters = multipleDelimiters.map(d => d.slice(1, -1)); 
        const escapedDelimiters = rawDelimiters.map(escapeRegExp);
        const delimiterPattern = escapedDelimiters.join('|'); 
        return {
            delimiter: new RegExp(delimiterPattern),
            numbers,
        };
    }

    const singleDelimiter = delimiterLine.slice(2);
    return {
        delimiter: new RegExp(escapeRegExp(singleDelimiter)),
        numbers,
    };
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { parseDelimiter };
  