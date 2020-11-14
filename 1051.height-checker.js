/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const original = JSON.parse(JSON.stringify(heights));
    heights.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < original.length; i++) {
        if (heights[i] !== original[i]) {
            count++;
        }
    }
    return count;
};
// @lc code=end

