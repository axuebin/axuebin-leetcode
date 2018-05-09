/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return true;
    }
    const hash = {
        '(': ')',
        '{': '}',
        '[': ']',
    };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const stackLen = stack.length;
        const temp = s[i];
        if (stackLen === 0) {
            stack.push(temp);
            continue;
        }
        if (hash[stack[stackLen - 1]] === temp) {
            stack.pop();
            continue;
        }
        stack.push(temp);
    }
    return stack.length === 0;
};