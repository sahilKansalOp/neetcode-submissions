class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let right = 1;
        let left = 0;
        for(let i = 0;i<prices.length;i++) {
           
            if(prices[right] > prices[left] ){ 
            maxProfit = Math.max(prices[right] - prices[left],maxProfit);
           
            }
            else {left = right}
             right++;
            
        }
        return maxProfit;
    }
}
