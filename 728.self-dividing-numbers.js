/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const array = [];
    for (let i = left; i <= right; i++) {
        let str = i + '';
        let isSelfDivide = true; 
        for (let j = 0; j < str.length; j++) {
            const element = +str[j];
            if (i % element !== 0) {
                isSelfDivide = false;
                break;
            }
        }
        if (isSelfDivide) {
            array.push(i);
        }
    }
    return array;
};
// @lc code=end

