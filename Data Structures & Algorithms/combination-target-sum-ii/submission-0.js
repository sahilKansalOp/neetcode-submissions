class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */

    constructor() {
        this.res = [];
        this.count = new Map();
    }
    combinationSum2(candidates, target) {
        const uniqueArr = [];
        const cur = [];
        for (let num of candidates) {
            if(!this.count.has(num)) {
                uniqueArr.push(num);
            }
            this.count.set(num,(this.count.get(num) || 0)+1);
        }
        this.back(uniqueArr,target,cur,0)
        return this.res;
    }
    back(nums,target,cur,i) {
        if(target === 0) {
            this.res.push([...cur]);
            return;
        }
         if(target<0 || i>=nums.length) return;
        if(this.count.get(nums[i])>0) {
            cur.push(nums[i]);
            this.count.set(nums[i],this.count.get(nums[i]) -1 );
            this.back(nums,target-nums[i],cur,i);
            this.count.set(nums[i],this.count.get(nums[i]) +1 );
            cur.pop();
        }
        this.back(nums,target,cur,i+1);
    }
}
