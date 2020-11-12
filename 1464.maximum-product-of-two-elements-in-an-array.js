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
    let max_1 = 0, max_2 = 0;
    nums.forEach(num => {
        max_1 = Math.max(max_1, num);
    });
    nums.splice(nums.indexOf(max_1), 1);
    nums.forEach(num => {
        max_2 = Math.max(max_2, num);
    });

    return (max_1 - 1) * (max_2 - 1);
};
// @lc code=end

