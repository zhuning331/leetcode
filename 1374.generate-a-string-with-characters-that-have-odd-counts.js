/*
 * @lc app=leetcode id=1374 lang=javascript
 *
 * [1374] Generate a String With Characters That Have Odd Counts
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let result = '';
    if (n % 2 === 1) {
        for (let i = 0; i < n; i++) {
            result += 'q';
        }
    } else {
        for (let i = 0; i < n; i++) {
            if (i === 0) {
                result += 'w';
            } else {
                result += 'q';
            }
        }
    }
    return result;
};
// @lc code=end

