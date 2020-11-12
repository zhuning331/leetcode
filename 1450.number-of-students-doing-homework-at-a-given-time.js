/*
 * @lc app=leetcode id=1450 lang=javascript
 *
 * [1450] Number of Students Doing Homework at a Given Time
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let count = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) {
            count++;
        }
    }
    return count;
};
// @lc code=end

