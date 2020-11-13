/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return traverseBST(root, val);
};

var traverseBST = function(root, val) {
    let target = null;
    if (root.val === val) {
        return root;
    }
    if (root.left) {
        target = traverseBST(root.left, val);
        if (target) {
            return target;
        }
    } 
    if (root.right) {
        target = traverseBST(root.right, val);
        if (target) {
            return target;
        }
    }
    return target;
};
// @lc code=end

