const caesar = function(str, num) {
    const newNum = num % 26;
    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const strLowerCase = str.toLowerCase();
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        const currentLetter = strLowerCase[i];
        if (currentLetter === ' ' || currentLetter === '!' || currentLetter === ',') {
            newStr += currentLetter;
            continue;
        }
        const strIndex = alpha.indexOf(currentLetter);
        let strNewIndex = strIndex + newNum;
        if (strNewIndex > 25) strNewIndex -= 26;
        if (strNewIndex < 0) strNewIndex += 26;
        if (str[i] === currentLetter) newStr += alpha[strNewIndex];
        else newStr += alpha[strNewIndex].toUpperCase();
    }
    return newStr;
}

module.exports = caesar
