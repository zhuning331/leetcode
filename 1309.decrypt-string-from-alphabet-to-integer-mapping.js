/*
 * @lc app=leetcode id=1309 lang=javascript
 *
 * [1309] Decrypt String from Alphabet to Integer Mapping
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const score = {};
    for (let i = 1; i < 27; i++) {
        score[i + ''] = String.fromCharCode(i + 96);
    }

    let result = ''; 
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '#') {
            result += score[s[i - 2] + s[i - 1]];
            s = s.replace(s[i - 2] + s[i - 1] + s[i], score[s[i - 2] + s[i - 1]]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (score[s[i]]) {
            s = s.replace(s[i], score[s[i]]);
        }
    }
    return s;
};
// @lc code=end

