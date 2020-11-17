/*
 * @lc app=leetcode id=1441 lang=javascript
 *
 * [1441] Build an Array With Stack Operations
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const result = [];
    for (let i = 0, count = 1; i < target.length; i++) {
        result.push('Push');
        if (target[i] !== count) {
            result.push('Pop');
            i--;
        }
        count++;
    }
    return result;
};
// @lc code=end

