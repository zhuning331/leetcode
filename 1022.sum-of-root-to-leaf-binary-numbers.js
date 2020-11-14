/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
 * @return {number}
 */
let sum = 0;
var sumRootToLeaf = function(root) {
    sum = 0;
    traverseTree(root, 0);
    return sum;
};

var traverseTree = function(root, current) {
    if (!root) {
        return;
    }
    current = current << 1 | root.val;
    if (!root.left && !root.right) {
        sum += current;        
    }
    if (root.left || root.right) {
        traverseTree(root.left, current);
        traverseTree(root.right, current);
    }
};
// @lc code=end

