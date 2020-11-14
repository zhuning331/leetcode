/*
 * @lc app=leetcode id=933 lang=javascript
 *
 * [933] Number of Recent Calls
 */

// @lc code=start

var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    let count = 0;
    for (let i = 0; i < this.requests.length; i++) {
        const element = this.requests[i];
        if (element >= t - 3000 && element <= t) {
            count++
        }
    }
    return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

