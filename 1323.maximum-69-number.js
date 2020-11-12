/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let max = num;
    let array = (num + '').split('');
    const score = {
        '6': '9',
        '9': '6'
    };
    for (let i = 0; i < array.length; i++) {
        let tmp = JSON.parse(JSON.stringify(array));
        tmp[i] = score[tmp[i]];
        let val = +tmp.join('');
        max = Math.max(max, val);
    }
    return max;
};
// @lc code=end

