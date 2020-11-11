/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';
    if (strs.length > 0) {
        if (strs.length > 1) {
            const min = Math.min(...strs.map(str => str.length));
            let isMatch = true;
            for (let i = 0; i < min && isMatch; i++) {
                for (let j = 0; j < strs.length - 1; j++) {
                    if (strs[j][i] !== strs[j + 1][i]) {
                        isMatch = false;
                        break;
                    } else if (j === strs.length - 2) {
                        result += strs[j][i];
                    }
                }
            }
        } else {
            result = strs.join('');
        }
    }
    return result;
};
// @lc code=end

