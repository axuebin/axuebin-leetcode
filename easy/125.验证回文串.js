/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLocaleLowerCase().replace(/[^a-z0-9]/ig,"");
    const arr = str.split('');
    return arr.reverse().join('') === str;
};

