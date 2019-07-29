/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let sum = 0;
    let temp = 1;
    const A = 'A'.charCodeAt();
    for (let i = s.length; i >= 1; i -= 1) {
        sum += (s[i - 1].charCodeAt() - A + 1) * temp;
        temp *= 26;
    }
    return sum;
};

