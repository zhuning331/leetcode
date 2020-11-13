/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    const buffer = [];
    const result = [];
    for (let i = 0; i < S.length + 1; i++) {
        buffer.push(i);
    }
    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        if (char === 'I') {
            result.push(buffer.splice(0, 1));
        } else {
            result.push(buffer.splice(buffer.length - 1, 1));
        }
    }
    result.push(buffer[0]);
    return result;
};
// @lc code=end

