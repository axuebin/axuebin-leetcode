/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const temp = [];
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (temp[target - cur] !== undefined) {
            return [temp[target - cur] + 1, i + 1];
        }
        temp[cur] = i;
    }
    return [];
};


