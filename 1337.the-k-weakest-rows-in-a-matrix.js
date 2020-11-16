/*
 * @lc app=leetcode id=1337 lang=javascript
 *
 * [1337] The K Weakest Rows in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const matSum = [], buffer = [], result = [];
    for (let i = 0; i < mat.length; i++) {
        let sum = 0;
        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
        }
        matSum.push(sum);
        buffer.push(sum);
    }
    matSum.sort((a, b) => a - b);
    for (let i = 0; i < k; i++) {
        result.push(buffer.indexOf(matSum[i]));
        buffer[result[i]] = -1;
    }
    return result;
};
// @lc code=end

