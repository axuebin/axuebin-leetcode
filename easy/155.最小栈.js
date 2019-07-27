/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 * 主要是要找到最小值
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    const minStack = this.minStack;
    const curMin = minStack[minStack.length - 1];
    if (curMin === undefined || x <= curMin) {
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const last = this.stack.pop();
    const minStack = this.minStack;
    const curMin = minStack[this.minStack.length - 1];
    if (last === curMin) {
        this.minStack.pop();
    }
    return last;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const stack = this.stack;
    return stack[stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const minStack = this.minStack;
    return minStack[minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

