const palindromes = function (str) {
    const punctuation = "!@#$%^&*()?<>,./;:'\"[]{}|\\-=_+`~"
    const symbolsList = punctuation.split('')
    for (const symbol of symbolsList) {
        if (str.includes(symbol)) {
            str = str.replaceAll(symbol, '')
        }
    }
    const justWordsNoSymbolsOrSpacesArray = str.toLowerCase().split(" ")
    const justLetters = justWordsNoSymbolsOrSpacesArray.join('')
    const reversed = justLetters.split('').reverse().join('')
    return reversed === justLetters ? true : false
};

palindromes('Racecar!')

// Do not edit below this line
module.exports = palindromes;
