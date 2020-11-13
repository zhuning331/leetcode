/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const score = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0]
    };
    const array = [];
    for (let i = 0; i < moves.length; i++) {
        array.push(score[moves[i]]);
    }
    const sum = [0, 0];
    for (let i = 0; i < array.length; i++) {
        sum[0] += array[i][0];
        sum[1] += array[i][1];
    }
    if (sum[0] === 0 && sum[1] === 0) {
        return true;
    } else {
        return false;
    }
};
// @lc code=end

