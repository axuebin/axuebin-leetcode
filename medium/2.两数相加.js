/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resultNode = new ListNode(0);
    const result = resultNode;
    let flag = 0;
    while(l1 || l2 ||flag) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        let sum = val1 + val2 + flag;
        flag = sum >= 10 ? 1 : 0;
        sum = sum % 10;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next
        }
        resultNode.next = new ListNode(sum)
        resultNode = resultNode.next;
    }
    return result.next;
};

