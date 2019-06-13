/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 * f(n) = f(n-1) + f(n-2);
 */
/**
 * @param {number} n
 * @return {number}
 */
// 自顶向下
// var climbStairs = function(n) {
//     if (n === 0 || n === 1 || n === 2) {
//         return n;
//     }
//     var dp = [];
//     dp[0] = 1;
//     dp[1] = 1;
//     for (var i = 2; i <=n; i += 1) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//     }
//     return dp[n];
// };

// 自底向上
var climbStairs = function(n) {
    if (n === 0 || n === 1 || n === 2) {
        return n;
    }
    var a = 1;
    var b = 2;
    for (var i = 3; i <= n; i += 1) {
        var temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

