/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0, base = arr[0] - arr[1]; i < arr.length - 1; i++) {
        if (base !== arr[i] - arr[i + 1]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

