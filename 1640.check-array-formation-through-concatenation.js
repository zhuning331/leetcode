/*
 * @lc app=leetcode id=1640 lang=javascript
 *
 * [1640] Check Array Formation Through Concatenation
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    for (let i = 0; i < pieces.length; i++) {
        if (!isSubset(arr, pieces[i])) {
            return false;
        }
    }
    return true;
};

var isSubset = function(arr, sub) {
    let result = true;
    let index = 0;
    for (let i = 0; i < sub.length; i++) {
        if (i === 0) {
            index = arr.indexOf(sub[i]);
            if (index === -1) {
                return false;
            }
        } else if (arr.indexOf(sub[i]) !== index + 1) {
            return false;
        } else {
            index = arr.indexOf(sub[i]);
        }
    }
    return result;
}
// @lc code=end

