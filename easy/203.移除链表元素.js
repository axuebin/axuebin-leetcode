/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
        return head;
    }
    let pre;
    let cur = head;
    while(cur) {
        if (cur.val === val) {
            if (!pre) {
                head = head.next;
            } else {
                pre.next = cur.next;
            }
        } else {
            pre = cur;
        }
        cur = cur.next
    }
    return head;
};

