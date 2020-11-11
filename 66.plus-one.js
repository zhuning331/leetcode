/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const length = digits.length;
    if (length > 16) {
        digits[digits.length - 1]++;
        for (let i = digits.length - 1; i > -1; i--) {
            if (digits[i] > 9) {
                digits[i] = 0;
                if (i === 0) {
                    digits.splice(0, 0, 1);
                } else {
                    digits[i - 1]++;
                }
            } else {
                break;
            }
        }
        return digits;
    }
    const str = digits.join('');
    const val = (+str + 1 + '').split('');
    if (val.length < length) {
        const minus = length - val.length;
        for (let i = 0; i < minus; i++) {
            val.splice(0, 0, 0);
        }
    }
    return val;
};
// @lc code=end

