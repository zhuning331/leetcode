/*
 * @lc app=leetcode id=897 lang=javascript
 *
 * [897] Increasing Order Search Tree
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const order = [];
    let result = new TreeNode();
    let head = result;
    traverseBST(root, order);
    for (let i = 0; i < order.length; i++) {
        result.val = order[i];
        if (i !== order.length - 1) {
            result.right = new TreeNode();
            result = result.right;
        }
    }
    return head;
};

var traverseBST = function(root, order) {
    if (root.left) {
        traverseBST(root.left, order);
    }
    order.push(root.val);
    if (root.right) {
        traverseBST(root.right, order);
    }
};
// @lc code=end

