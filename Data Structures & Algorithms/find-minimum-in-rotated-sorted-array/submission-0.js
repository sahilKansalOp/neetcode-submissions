class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length -1;    
        while(l<r){
            const m = l + Math.floor(r-1/2);
            if(nums[m]<nums[r]) 
            r = m;
            else l = m+1;
        }
        return nums[l];
    }
}
