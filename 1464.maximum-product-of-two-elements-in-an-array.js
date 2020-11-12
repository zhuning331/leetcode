/*
 * @lc app=leetcode id=1464 lang=javascript
 *
 * [1464] Maximum Product of Two Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums = nums.sort();
    console.log(nums);
    return (nums[nums.length - 2] - 1) * (nums[nums.length - 1] - 1);
};
// @lc code=end

