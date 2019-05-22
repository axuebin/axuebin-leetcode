/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 * 如果前一个数是负数，就重新开始计算
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    var max = nums[0];
    var sum = nums[0];
    for (var i = 1; i < nums.length; i += 1) {
        sum = Math.max(nums[i], sum + nums[i]);
        if (sum > max) {
            max = sum;
        }
    }
    return max;
};

