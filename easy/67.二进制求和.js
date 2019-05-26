/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 又踩坑了。。不能直接相加。。
// var addBinary = function(a, b) {
//     return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
// };

var addBinary = function(a, b) {
    if (!a || a.length === 0) return b;
    if (!b || b.length === 0) return a;

    var flag = 0;
    var result = [];

    while(a.length < b.length) { a = '0' + a };
    while(b.length < a.length) { b = '0' + b };

    var length = a.length;

    for (var i = length - 1; i >= 0; i -= 1) {
        var sum = Number(a[i]) + Number(b[i]) + flag;
        if (sum >= 2) {
            result.push(sum % 2);
            flag = 1;
        } else {
            result.push(sum);
            flag = 0;
        }
    }

    return flag === 0 ? result.reverse().join(''): flag + result.reverse().join('');
};

