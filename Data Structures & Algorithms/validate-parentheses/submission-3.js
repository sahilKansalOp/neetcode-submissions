class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const sta = {
            '}' : '{',
            ']' : '[',
            ')' : '('
        }
const stackedArr = [];
        for (let i = 0;i<s.length;i++) {
            if(!sta[s[i]]) stackedArr.push(s[i]);
            else if(sta[s[i]] === stackedArr[stackedArr.length - 1]) stackedArr.pop();
            else return false;    
        }
        return stackedArr.length === 0;
    }
}