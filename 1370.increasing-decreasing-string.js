/*
 * @lc app=leetcode id=1370 lang=javascript
 *
 * [1370] Increasing Decreasing String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let result = '';
    let array = s.split('').sort();
    while(array.length > 0) {
        result += getIncreaseStr(array);
        result += getDecreaseStr(array);
    }
    return result;
};

var getIncreaseStr = function(array) {
    if (array.length === 0) {
        return '';
    }
    let max = '`';
    let result = '';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > max) {
            max = element;
            result += element;
            array.splice(i, 1);
            i--;
        }
    }
    return result;
};

var getDecreaseStr = function(array) {
    if (array.length === 0) {
        return '';
    }
    let min = '{';
    let result = '';
    for (let i = array.length - 1; i > -1; i--) {
        const element = array[i];
        if (element < min) {
            min = element;
            result += element;
            array.splice(i, 1);
            i++;
        }
    }
    return result;
};
// @lc code=end

