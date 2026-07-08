class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = 0;
        let maxRight = 0;
        let n = height.length;
        let total = 0;
        const rightArr=[];
        const leftArr = [];
        for(let i=0;i<n;i++) {
            maxLeft = Math.max(maxLeft,height[i]);
            leftArr.push(maxLeft);
            maxRight = Math.max(height[n-i-1],maxRight);
            rightArr[n-i-1] = maxRight;
        }
        for(let i = 0; i<n;i++) {
            if (Math.min(leftArr[i],rightArr[i]) - height[i] >0)
            total += Math.min(leftArr[i],rightArr[i]) - height[i];
        }
        return total;
    }
}
