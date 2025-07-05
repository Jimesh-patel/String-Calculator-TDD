function parseDelimiter(input) {
    if (input.startsWith('//')) {
        const [delimiterLine, numbers] = input.split('\n');

        const delimiterMatches = delimiterLine.match(/\[(.+)\]/);

        if (delimiterMatches) {
            const rawDelimiter = delimiterMatches[1];
            const escapedDelimiter = escapeRegExp(rawDelimiter); 
            return {
                delimiter: new RegExp(escapedDelimiter),
                numbers,
            };
        }

        const singleDelimiter = delimiterLine.slice(2);
        return {
            delimiter: new RegExp(escapeRegExp(singleDelimiter)),
            numbers,
        };
    }

    return { delimiter: /[\n,]/, numbers: input };
}

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = { parseDelimiter };
  