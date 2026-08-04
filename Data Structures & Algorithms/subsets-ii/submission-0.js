class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
        constructor() {
            this.res = new Set();
        }
    subsetsWithDup(nums) {
    nums.sort((a,b)=>a-b);
    this.backTrack(nums,0,[]);
    return Array.from(this.res).map(subset => JSON.parse(subset));
    }

    backTrack(nums,index,subset) {
        if(index === nums.length) {
            this.res.add(JSON.stringify(subset));
            return;
        }
        subset.push(nums[index]);
        this.backTrack(nums,index+1,subset);
        subset.pop();
        this.backTrack(nums,index+1,subset);
    }
}
