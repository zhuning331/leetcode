/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    if (s.length === 0) {
        return 0;
    }
    const array = s.split(' ');
    if (array[array.length - 1] < 1) {
        return Math.max(...array.map(element => element.length));
    } else {
        return array[array.length - 1].length;
    }
};
// @lc code=end

