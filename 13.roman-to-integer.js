/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const special = {
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let result = 0;

    for (const key in special) {
        if (s.indexOf(key) !== -1) {
            result += special[key];
            s = s.replace(key, '');
        }
    }

    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        result += roman[element];
    }
    return result;
};
// @lc code=end

