/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) {
        return '';
    }
    const length = strs.reduce((pre, after) => Math.min(pre, after.length), Number.MAX_VALUE);
    let result = '';
    for (let i = 0; i < length; i++) {
        const temp = strs[0][i];
        const isEqual = strs.every(item => item[i] === temp);
        if (!isEqual) {
            break;
        }
        result += temp;
    }
    return result;
};