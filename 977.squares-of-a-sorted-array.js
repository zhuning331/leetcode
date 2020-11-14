/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    const array = A.map(element => element * element);
    return array.sort((a, b) => a - b);
};
// @lc code=end

