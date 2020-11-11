/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var sum = 0;
var rangeSumBST = function(root, low, high) {
    sum = 0;
    traverseBST(root, low, high);
    return sum;
};

var traverseBST = function(root, low, high) {
    if (root.val >= low && root.val <= high) {
        sum += root.val
    }
    if (root.left) {
        traverseBST(root.left, low, high);
    }
    if (root.right) {
        traverseBST(root.right, low, high);
    }
}
// @lc code=end

