/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];
    for (let i = 0; i < numRows; i += 1) {
        const cur = [i];
        cur[0] = 1;
        cur[i] = 1;
        for (let j = 1; j < i; j += 1) {
            cur[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(cur);
    }
    return result;
};

