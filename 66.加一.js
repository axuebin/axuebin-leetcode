/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 这样会超过最大数
// var plusOne = function(digits) {
//     var num = + digits.join('') + 1;
//     return num.toString().split('').map(item => + item);
// };

var plusOne = function(digits) {
    var length = digits.length;
    for (var i = length - 1; i >= 0; i -= 1) {
        if (digits[i] === 9) {
            digits[i] = 0;
            if (!digits[0]) {
                digits.unshift(1);
                break;
            }
        } else {
            digits[i] += 1;
            break;
        }
    }
    return digits;
}
