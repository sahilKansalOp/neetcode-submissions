class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let sum = 0;
        const operation = {
            '*' : (a,b) => a * b ,
            '+' : (a,b) => a + b ,
            '-' : (a,b) => b - a ,
            '/' : (a,b) => Math.trunc(b/a) ,

        }
        for(const token of tokens) {
            if(operation[token]) {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(operation[token](a,b));
            }
            else stack.push(Number(token))
        }
        return stack.pop()
    }
}
