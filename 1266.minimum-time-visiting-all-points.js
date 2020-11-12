/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let distance = 0;
    for (let i = 0; i < points.length - 1; i++) {
        distance += maxLen(points[i], points[i + 1]);
    }
    return distance;
};

var maxLen = function(arrX, arrY) {
    return Math.max(Math.abs(arrX[0] - arrY[0]), Math.abs(arrX[1] - arrY[1]));
}
// @lc code=end

