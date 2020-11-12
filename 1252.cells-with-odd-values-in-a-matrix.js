/*
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    const mat = [];
    for (let i = 0; i < n; i++) {
        let array = [];
        for (let j = 0; j < m; j++) {
            array.push(0);
        }
        mat.push(array);
    }
    indices.forEach(index => incrementOne(mat, index));
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] % 2 === 1) {
                count++;
            }
        }
    }
    return count;
};

var incrementOne = function(mat, index) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (i === index[0] && j === index[1]) {
                mat[i][j] += 2;
            } else if (i === index[0] || j === index[1]) {
                mat[i][j]++
            }
        }
    }
};
// @lc code=end

