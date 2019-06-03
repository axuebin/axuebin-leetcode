/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) return x;
    var start = 1;
    var end = x;
    while (start <= end) {
        var middle = start + (end - start) / 2;
        if (middle > x / middle) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return end;
};