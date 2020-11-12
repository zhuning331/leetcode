/*
 * @lc app=leetcode id=1436 lang=javascript
 *
 * [1436] Destination City
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let resultSite = '';
    for (let i = 0; i < paths.length; i++) {
        let site = paths[i][1];
        let isNotFound = false;
        for (let j = 0; j < paths.length; j++) {
            if (site === paths[j][0]) {
                isNotFound = true;
                continue;
            }
        }
        if (!isNotFound) {
            resultSite = site;
        }
    }
    return resultSite;
};
// @lc code=end

