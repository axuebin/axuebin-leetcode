/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    for (let i = 0; i < prices.length - 1; i += 1) {
        if (prices[i + 1] > prices[i]) {
            sum += prices[i + 1] - prices[i];
        }
    }
    return sum;
};

