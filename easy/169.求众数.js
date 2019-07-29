/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const length = nums.length;
    const countBase = length / 2;
    const hash = {};
    let result = 0;
    for (let i = 0; i < length; i += 1) {
        const temp = nums[i];
        hash[temp] = (hash[temp] || 0) + 1;
        if (hash[temp] > countBase) {
            result = temp;
        }
    }
    return result;
};

