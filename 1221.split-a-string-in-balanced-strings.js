/*
 * @lc app=leetcode id=1221 lang=javascript
 *
 * [1221] Split a String in Balanced Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    const score = {
        L: 1,
        R: -1
    }
    let sum = 0; 
    for (let i = 0; i < s.length; i++) {  
        sum += score[s[i]];
        if (sum === 0) {
            count++;
        }
    }
    return count;
};
// @lc code=end

