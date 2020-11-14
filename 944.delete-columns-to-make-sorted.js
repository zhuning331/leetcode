/*
 * @lc app=leetcode id=944 lang=javascript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    const strLen = A[0].length;
    let count = 0;
    for (let i = 0; i < strLen; i++) {
        for (let j = 0; j < A.length - 1; j++) {
            if (A[j][i] > A[j + 1][i]) {
                count++;
                break;
            }
        }
    }
    return count;
};
// @lc code=end

