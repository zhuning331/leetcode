/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        sum = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            max = Math.max(max, sum);
        }
        sum = 0;
    }
    return max;
};
// @lc code=end

