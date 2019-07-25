/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Infinity;
    let profit = 0;
    for (let i = 0; i < prices.length; i += 1) {
        const price = prices[i]; 
        if (price < min) {
            min = price;
        } else if (price > min && price - min > profit) {
            profit = price - min;
        }
    }
    return profit;
};

