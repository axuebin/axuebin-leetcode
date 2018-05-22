/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        const max = Math.max(...nums);
        if (target > max) {
            return nums.length;
        }
        return nums.findIndex(e => e > target);
    }
};