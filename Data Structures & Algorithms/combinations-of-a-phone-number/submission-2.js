class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let res = [];
        if(!digits.length) return res;
        const digitToChar = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'pqrs',
            8: 'tuv', 
            9: 'wxyz',
        }

        const backTrack = (i,str) => {
            if(str.length === digits.length) {
                res.push(str);
                return;
            }
            for(const c of digitToChar[digits[i]]) {
                backTrack(i+1,str+c);
            }
        }
        backTrack(0,'');
        return res;
    }
}
