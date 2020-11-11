/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
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
 * @return {number}
 */
var array = [];
var getDecimalValue = function(head) {
    array = [];
    traverseList(head);
    return parseInt(array.join(''), 2);
};

var traverseList = function(head) {
    array.push(head.val);
    if (head.next) {
        traverseList(head.next);
    }
}
// @lc code=end

