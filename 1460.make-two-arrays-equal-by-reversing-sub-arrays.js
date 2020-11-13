/*
 * @lc app=leetcode id=1460 lang=javascript
 *
 * [1460] Make Two Arrays Equal by Reversing Sub-arrays
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        let isFound = false;
        for (let j = 0; j < target.length; j++) {
            if (arr[i] === target[j]) {
                target.splice(j, 1);
                isFound = true;
                j--;
                break;
            }
        }
        if (!isFound) {
            return false;
        }
    }
    return true;
};
// @lc code=end

