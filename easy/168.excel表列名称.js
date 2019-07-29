/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let result = '';
    while (n) {
        const A = 'A'.charCodeAt();
        const code = String.fromCharCode((n - 1) % 26 + A);
        n = Math.floor((n - 1) / 26);
        result = code + result;
    }
    return result;
};

