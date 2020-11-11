/*
 * @lc app=leetcode id=1588 lang=javascript
 *
 * [1588] Sum of All Odd Length Subarrays
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        array.push(arr[i]);
        for (let j = i + 1; j < arr.length; j++) {
            array.push(arr[j]);
            if (array.length % 2 === 1) {
                array.forEach(element => {
                    sum += element;
                });
            }
        }
        array = [];
    }
    return sum;
};
// @lc code=end

