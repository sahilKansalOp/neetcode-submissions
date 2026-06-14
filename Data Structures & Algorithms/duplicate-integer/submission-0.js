class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numberObject = {};
        for(let i = 0; i < nums.length; i++) {
            if(numberObject[nums[i]]) {
                return true;
            }
            else {
                numberObject[nums[i]] = 1;
            }
        }
        return false;
    }
}
