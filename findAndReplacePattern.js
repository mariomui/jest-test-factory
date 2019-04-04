
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function hash(curr) {
    let hashy = {}
    curr.reduce((a, b, key) => {
        if (a[b]) {
            a[b] += key
        } else {
            a[b] = "" + key
        }
        return a
    }, hashy);
    return hashy
}
const findAndReplacePattern = function (words, pattern) {

    let patternTally = hash(pattern.split(''))
    let arr = []
    for (var i = 0; i < words.length; i++) {
        let wordsTally = hash(words[i].split(''));
        if (
            JSON.stringify(Object.values(wordsTally)) ===
            JSON.stringify(Object.values(patternTally))) {
            arr.push(words[i])
        }
    }
    return arr
}

const findAndReplacePattern2 = (words, pattern) => {

    let arr = []
    for (let j = 0; j < words.length; j++) {
        let h1 = {}
        let h2 = {}
        let match = true

        for (let i = 0; i < words[j].length; i++) {

            let currWordLetter = words[j][i]
            let currPatternLetter = pattern[i]
            if ((h1[currWordLetter] === undefined) && (h2[currPatternLetter] === undefined)) {
                h1[currWordLetter] = i
                h2[currPatternLetter] = i
            } else if ((h1[currWordLetter] === undefined) && (h2[currPatternLetter] !== undefined)) {
                match = false
                break;
            } else if ((h1[currWordLetter] !== undefined) && (h2[currPatternLetter] === undefined)) {
                match = false
                break
            } else if ((h1[currWordLetter] !== undefined) && (h2[currPatternLetter] !== undefined)) {
                if (h1[currWordLetter] !== h2[currPatternLetter]) {
                    match = false
                    break
                } else {
                    h1[currWordLetter] = i
                    h2[currPatternLetter] = i
                }
            }
        }
        if (match === true) {
            arr.push(words[j])
        }
    }
    // loop through words
    return arr
}

module.exports = {
    findAndReplacePattern,
    findAndReplacePattern2,
}