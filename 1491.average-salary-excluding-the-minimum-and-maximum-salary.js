/*
 * @lc app=leetcode id=1491 lang=javascript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const min = Math.min(...salary);
    const max = Math.max(...salary);
    let sum = 0
    salary.splice(salary.indexOf(min), 1);
    salary.splice(salary.indexOf(max), 1);
    sum = salary.reduce((a, b) => a + b);
    return sum / salary.length;
};
// @lc code=end

