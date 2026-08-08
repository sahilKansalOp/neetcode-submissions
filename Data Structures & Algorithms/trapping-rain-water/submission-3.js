class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftArr = [];
        let rightArr = new Array(height.length).fill(0);
        let lMax = 0;
        let rMax = 0;
        for(let i = 0; i<height.length;i++) {
            leftArr.push(lMax);
            lMax = Math.max(lMax,height[i]);
            rightArr[height.length-i-1] = rMax;
            rMax = Math.max(rMax,height[height.length-i-1]);
        }
        let rain = 0;
         for(let i = 0; i<height.length;i++) {
            let r = Math.min(leftArr[i],rightArr[i]) - height[i];
            if(r>0) rain += r;
         }
    return rain;
    }
}
