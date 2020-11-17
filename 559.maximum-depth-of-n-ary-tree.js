/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
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
 * @return {number}
 */
let max = 0;
var maxDepth = function(root) {
    let depth = 0;
    max = 0;
    preorder(root, depth);
    return max;
};

var preorder = function(root, depth) {
    if (root) {
        depth++;
        if (root.children.length === 0) {
            if (max < depth) {
                max = depth;
            }
        }
        for (let i = 0; i < root.children.length; i++) {
            preorder(root.children[i], depth);
        }
    }
};
// @lc code=end

