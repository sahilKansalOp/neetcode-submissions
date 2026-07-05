class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length -1;
        let output = Array(n).fill(1);
        for(let i = 1;i<=n;i++) {
            output[i] = output[i-1] * nums[i-1];
        }
        let postfix = 1;
        for(let i=n;i>=0;i--) {
            output[i] *= postfix;
            postfix *= nums[i];
        }
        return output;
    }
}
