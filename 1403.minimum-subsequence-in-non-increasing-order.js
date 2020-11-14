/*
 * @lc app=leetcode id=1403 lang=javascript
 *
 * [1403] Minimum Subsequence in Non-Increasing Order
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    nums.sort((a, b) => b - a);
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums.splice(i, 1)[0]);
        if (nums.length === 0) {
            return result;
        }
        let sumOfResult = result.reduce((a, b) => a + b);
        let sumOfNums = nums.reduce((a, b) => a + b);
        if (sumOfResult > sumOfNums) {
            return result;
        }
        i--;
    }
};
// @lc code=end

