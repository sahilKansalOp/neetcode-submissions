class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest  = 0;
         
        for(let num of numSet) {
            let length = 1;
            if(!numSet.has(num - 1)) {
                while(numSet.has(num + length)) {length++;}
            }
            longest=Math.max(length,longest);
        }

        return longest;
    }
}
