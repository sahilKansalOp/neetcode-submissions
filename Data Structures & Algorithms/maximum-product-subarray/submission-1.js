class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let max = 1;
        let min = 1;
        for (let num of nums) {
            let tmp = max * num;
            max = Math.max(Math.max(tmp,num*min),num);
            min = Math.min(Math.min(tmp,num*min),num);
            res = Math.max(res,max)
        }
        return res;
    }
}
