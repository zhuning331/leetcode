/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    arr.sort((a, b) => a - b);
    arr.push(999999);
    let count = 1;
    const array = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            array.push(count);
            count = 1;
        }
    }
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            return false;
        }
    }
    return true;
};
// @lc code=end

