class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const numCount = {};
        for(let i = 0;i<nums.length;i++) {
            if(numCount[nums[i]]) numCount[nums[i]] = numCount[nums[i]] + 1;
            else numCount[nums[i]] = 1;
            if (numCount[nums[i]] > nums.length/2) return nums[i];
        }
    }
}
