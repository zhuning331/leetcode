/*
 * @lc app=leetcode id=804 lang=javascript
 *
 * [804] Unique Morse Code Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if (words.length === 0) {
        return 0;
    }
    const morseArray = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const morseMap = {};
    for (let i = 97; i < 123; i++) {
        morseMap[String.fromCharCode(i)] = morseArray[i - 97];
    }
    const score = {
        '-': '1',
        '.': '0'
    };
    const morseWords = words.map(word => {
        let str = '';
        for (let i = 0; i < word.length; i++) {
            const tmp = morseMap[word[i]];
            for (let j = 0; j < tmp.length; j++) {
                str += score[tmp[j]];
            }
        }
        return parseInt(str, 2);
    }).sort();
    
    let base = morseWords[0];
    let count = 1;
    for (let i = 1; i < morseWords.length; i++) {
        if (base !== morseWords[i]) {
            base = morseWords[i];
            count++;
        }
    }
    return count;
};
// @lc code=end

