class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */

    backtrack(on,cn,n,res,stack) {
        if(on===cn && on === n) {
            res.push(stack);
        }
        if(on<n) this.backtrack(on+1,cn,n,res,stack+'(');
        if(cn<on) this.backtrack(on,cn+1,n,res,stack+')');
    }

    generateParenthesis(n) {
       const res = [];
       this.backtrack(0,0,n,res,'');
       return res; 
    }
}
