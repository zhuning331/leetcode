/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    for (let i = 0; i < A.length; i++) {
        if ((i % 2 === 0 && A[i] % 2 === 1) || i % 2 === 1 && A[i] % 2 === 0) {
            for (let j = i + 1; j < A.length; j++) {
                if ((i % 2 === 0 && A[i] % 2 === 1) && (A[j] % 2 === 0) || 
                    (i % 2 === 1 && A[i] % 2 === 0) && (A[j] % 2 === 1)) {
                    let temp = A[i];
                    A[i] = A[j];
                    A[j] = temp;
                }
            }
        }
    }
    return A;
};
// @lc code=end

