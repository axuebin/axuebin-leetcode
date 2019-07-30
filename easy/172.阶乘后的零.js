/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result = 0;
    if (n < 5) {
        return 0;
    }
    while (n >= 5) {
        n = Math.floor(n / 5);
        result += n;
    }
    return result;
};

