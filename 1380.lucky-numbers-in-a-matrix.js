/*
 * @lc app=leetcode id=1380 lang=javascript
 *
 * [1380] Lucky Numbers in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let minRow = 99999;
    for (let i = 0; i < matrix.length; i++) {
        minRow = Math.min(...matrix[i]);
        let indexJ = matrix[i].indexOf(minRow);
        let maxCol = 0;
        for (let r = 0; r < matrix.length; r++) {
            if (maxCol < matrix[r][indexJ]) {
                maxCol = matrix[r][indexJ];
            }
        }
        if (maxCol === minRow) {
            return [maxCol];
        }
    }
    return [];
};
// @lc code=end

