/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const array = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            array.push(A[i]);
        }
    }
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 1) {
            array.push(A[i]);
        }
    }
    return array;
};
// @lc code=end

