/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (target <= element) {
            index = i;
            break;
        } else if (i === nums.length - 1) {
            index = nums.length;
        }
    }
    return index;
};
// @lc code=end

