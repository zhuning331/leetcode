/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    reverseAndInvertMat(A);
    return A;
};

var reverseAndInvertMat = function(mat) {
    const score = {
        0: 1,
        1: 0
    };
    for (let i = 0; i < mat.length; i++) {
        let array = [];
        for (let j = mat.length - 1; j > -1; j--) {
            array.push(score[mat[i][j]]);
        }
        mat[i] = array;
    }
};
// @lc code=end

