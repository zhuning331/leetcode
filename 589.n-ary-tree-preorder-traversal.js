/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    const result = [];
    traverseTree(root, result);
    return result;
};

var traverseTree = function(root, result) {
    if (root) {
        result.push(root.val);
        if (root.children.length !== 0) {
            for (let i = 0; i < root.children.length; i++) {
                if (root.children[i]) {
                    traverseTree(root.children[i], result);
                }
            }
        }
    }
};
// @lc code=end

