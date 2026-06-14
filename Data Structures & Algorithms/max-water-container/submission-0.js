class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxWater=0;
        while(l<r) {
            const height = Math.min(heights[l],heights[r]);
             maxWater = Math.max(height*(r-l),maxWater);
            if(heights[l]>=heights[r]) r--;
            else l++   
        }
return maxWater;
    }
}
