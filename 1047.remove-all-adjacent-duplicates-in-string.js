/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let index = removeDuplicatesOneRound(S);
    while(index !== -1) {
        let a = S.slice(0, index);
        let b = S.slice(index + 2, S.length);
        S = a + b;
        index = removeDuplicatesOneRound(S);
    }
    return S;
};

var removeDuplicatesOneRound = function(S) {
    for (let i = 0; i < S.length - 1; i++) {
        if (S[i] === S[i + 1]) {
            return i;
        }
    }
    return -1;
};
// @lc code=end

