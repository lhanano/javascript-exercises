const palindromes = function(string) {
    const processedString = string.toLowerCase().replace(/[^\w\s]|_| /g, '');
    const reversedString = processedString.split('').reverse().join('');
    return processedString === reversedString;
}

module.exports = palindromes
