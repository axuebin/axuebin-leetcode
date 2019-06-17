/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i = m - 1;
    var j = n - 1;
    var tail = m + n - 1;
    while (j >= 0) {
        nums1[tail--] = (i >= 0 && nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
    }  
};

