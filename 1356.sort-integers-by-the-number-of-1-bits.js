/*
 * @lc app=leetcode id=1356 lang=javascript
 *
 * [1356] Sort Integers by The Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a, b) => a - b);
    const binary1Count = arr.map(element => {
        let str = element.toString(2);
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '1') {
                count++;
            }
        }
        return count;
    });
    const buffer = JSON.parse(JSON.stringify(binary1Count));
    binary1Count.sort((a, b) => a - b);
    const result = [];
    for (let i = 0; i < binary1Count.length; i++) {
        result.push(arr[buffer.indexOf(binary1Count[i])]);
        buffer[buffer.indexOf(binary1Count[i])] = -1;
    }
    return result;
};
// @lc code=end

