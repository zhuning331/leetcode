/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] === A[j]) {
                return A[i];
            }
        }
    }
};
// @lc code=end

