/*
 * @lc app=leetcode id=893 lang=javascript
 *
 * [893] Groups of Special-Equivalent Strings
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
    for (let i = 0; i < A.length; i++) {
        let count = 0;
        for (let j = i + 1; j < A.length; j++) {
            if (isEquivalent(A[i], A[j])) {
                A.splice(j, 1);
                j--;
                count++;
            }
        } 
    }
    return A.length;
};

var isEquivalent = function(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        let isFound = false;
        for (let j = i % 2 === 0 ? i : i + 1; j < str2.length; j += 2) {
            if (str1[i] === str2[j]) {
                let temp = str2[i];
                str2[i] = str2[j];
                str2[j] = temp;
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            return isFound;
        }
    }
    return true;
};
// @lc code=end

