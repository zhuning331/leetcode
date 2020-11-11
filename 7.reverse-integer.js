/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isMinus = x < 0;
    if (isMinus) {
        x = -x;
    }
    const string = x + '';
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result[i] = string[string.length - 1 - i];
    }
    const final = isMinus ? -result.join('') : +result.join('');
    if (final > Math.pow(2, 31) - 1 || final < -Math.pow(2, 31)) {
        return 0;
    } else {
        return final;
    }
};
// @lc code=end

