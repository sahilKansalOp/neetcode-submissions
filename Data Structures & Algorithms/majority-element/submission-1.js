class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const numCount = {};
        const numsLen = nums.length;
        for(let i = 0;i<numsLen;i++) {
            if(numCount[nums[i]]) numCount[nums[i]] = numCount[nums[i]] + 1;
            else numCount[nums[i]] = 1;
            if (numCount[nums[i]] > numsLen/2) return nums[i];
        }
    }
}
