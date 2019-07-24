/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const result = new Array(rowIndex + 1).fill(0);
    result[0] = 1
    for (let i = 1; i <= rowIndex; ++i) {
        for (let j = i; j >= 1; --j) {
            result[j] += result[j - 1];
        }
    }
    return result;
};

