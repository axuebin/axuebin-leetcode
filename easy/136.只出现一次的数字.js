/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 * 1^1^2^2^3 = 3
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i += 1) {
        result ^= nums[i];
    } 
    return result;
};

