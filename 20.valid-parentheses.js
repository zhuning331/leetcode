/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const parentheses = [];
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        if (element === '(' || element === '[' || element === '{') {
            parentheses.push(element);
        } else if (element === ')') {
            if (parentheses[parentheses.length - 1] !== '(') {
                return false;
            } else {
                parentheses.splice(parentheses.length - 1, 1);
            }
        } else if (element === ']') {
            if (parentheses[parentheses.length - 1] !== '[') {
                return false;
            } else {
                parentheses.splice(parentheses.length - 1, 1);
            }
        } else if (element === '}') {
            if (parentheses[parentheses.length - 1] !== '{') {
                return false;
            } else {
                parentheses.splice(parentheses.length - 1, 1);
            }
        }
    }
    if (parentheses.length > 0) {
        return false;
    }
    return true;
};
// @lc code=end

