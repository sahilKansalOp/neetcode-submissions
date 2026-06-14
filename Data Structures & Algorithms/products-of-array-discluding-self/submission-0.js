class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = [];
        let prefix = 1;
        for(const num in nums) {
            arr[num] = prefix;
            prefix = nums[num] * prefix;
        }
        let postfix = 1;
        for(let i=arr.length-1;i>=0;i--) {
            arr[i] = arr[i] * postfix;
            postfix = postfix * nums[i];
        }
        return arr;
     }
}
