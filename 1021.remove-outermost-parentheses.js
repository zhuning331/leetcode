/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let result = '';
    const score = {
        '(': 1,
        ')': -1
    };
    for (let i = 1, sum = score[S[0]], index = 0; i < S.length; i++) {
        sum += score[S[i]];
        if (sum === 0) {
            result += S.substring(index + 1, i);
            index = i + 1;
        }
    }
    return result;
};
// @lc code=end

