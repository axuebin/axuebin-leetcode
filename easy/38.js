/**
 * 1. 1
 * 2. 11
 * 3. 21
 * 4. 1211
 * 5. 111221
 * 6. 312211
 * 7. 13112221
 * 8. 1113213211
 * 9. 31131211131221
 * 10. 13211311123113112211
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }
    var last = countAndSay(n - 1).split('');
    var count = 0;
    var cur = last[0];
    var result = [];
    for (var i = 0; i < last.length; i += 1) {
        if (cur !== last[i]) {
            result.push(count);
            result.push(cur);
            cur = last[i];
            count = 1;
        } else {
            count += 1 ;
        }
    }
    result.push(count > 0 ? count + cur : '');
    return result.join('');
};

