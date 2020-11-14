/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - arr[i + 1] > 0) {
            return i;
        }
    }
};
// @lc code=end

