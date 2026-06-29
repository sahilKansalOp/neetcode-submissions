class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const maxLeftArr = [];
        const maxRightArr = [];
      
        let maxRight = 0;
        let maxLeft = 0;
        let total = 0;
        for(let i = 0;i<height.length;i++) {
            maxLeftArr.push(maxLeft);
            maxLeft = Math.max(maxLeft,height[i]);
            maxRightArr[height.length - 1 - i] = maxRight;
            maxRight = Math.max(maxRight,height[height.length - i - 1]);
        }
        for(let i = 0;i<height.length;i++) {
            const water = Math.min(maxLeftArr[i],maxRightArr[i]) - height[i];
            if(water>0) total = total + water;
        }

        return total;
    }
}
