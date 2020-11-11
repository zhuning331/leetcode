/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let index = 0;
    if (needle.length > 0) {
        index = haystack.indexOf(needle);
    }
    return index;
};
// @lc code=end

