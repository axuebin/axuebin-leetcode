/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    var c = head;
    while (c && c.next) {
        if (c.val === c.next.val) {
            c.next = c.next.next;
        } else {
            c = c.next;
        }
    }
    return head;
};

