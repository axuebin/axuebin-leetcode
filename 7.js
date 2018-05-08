/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const min = - Math.pow(2, 31);
    const max = Math.pow(2, 31) - 1;
    const arr = x.toString().split('');
    let result;

    if (x < 0) {
        arr.shift();
    }
    result = Number(arr.reverse().join(''));
    if (x < 0) {
        result *= -1;
    }
    if (result < min || result > max) {
        return 0;
    } else {
        return result;
    }
};