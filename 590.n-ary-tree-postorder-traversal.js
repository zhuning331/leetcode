/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var result = [];
 
var postorder = function(root) {
    result = [];
    traverseTree(root);
    return result;
};

var traverseTree = function(root) {
    if (root) {
        if (root.children.length !== 0) {
            for (let i = 0; i < root.children.length; i++) {
                if (root.children[i]) {
                    traverseTree(root.children[i]);
                }
            }
        }
        result.push(root.val);
    }
};
// @lc code=end

