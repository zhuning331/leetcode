/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    const length = getLength(head);
    let result = head;
    for (let i = 1; i <= length / 2; i++) {
        result = result.next;
    }
    return result;
};

var getLength = function(head) {
    let depth = 0;
    for (let pointer = head; pointer; pointer = pointer.next) {
        depth++;
    }
    return depth;
};
// @lc code=end

