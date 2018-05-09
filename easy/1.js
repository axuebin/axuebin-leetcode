/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const a = nums[i];
        const temp = target - a;
        const tempIndex = nums.indexOf(temp);
        if (tempIndex !== -1 && temp !== a) {
            return [i, tempIndex];
        }
    }
};