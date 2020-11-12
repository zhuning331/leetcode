/*
 * @lc app=leetcode id=1572 lang=javascript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let totalSum = primaryDiagonalSum(mat); 
    reverseMat(mat);
    totalSum += primaryDiagonalSum(mat);
    return totalSum;
};

var primaryDiagonalSum = function(mat) {
    let sum = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i === j) {
                sum += mat[i][j];
            }
        }
    }  
    return sum;
};

var reverseMat = function(mat) {
    for (let i = 0; i < mat.length; i++) {
        let array = [];
        for (let j = mat.length - 1; j > -1; j--) {
            if (mat.length % 2 === 1 && i === (mat.length - 1) / 2 && j === (mat.length - 1) / 2) {
                array.push(0);
            } else {
                array.push(mat[i][j]);
            }
        }
        mat[i] = array;
    }
};
// @lc code=end

