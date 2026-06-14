class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const subVal = {};
        for(const i in nums) {
            const reqVal = target - nums[i];
            if(subVal[reqVal]) {
                return [parseInt(subVal[reqVal]),parseInt(i)] 
            }
            else subVal[nums[i]] = i;
        }
    }
}
