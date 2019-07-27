/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 * 如果 node.next 是null 就一定不是环形
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }
    let cur = head;
    while(cur) {
        if (cur.flag) {
            return true;
        }
        cur.flag = true;
        cur = cur.next;
    }
    return false;
};

