/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minprice=prices[0]
    let profit=0
    for(let i =1;i<prices.length;i++){
        if(prices[i]<minprice){
            minprice=prices[i]
        }
        let curProfit =prices[i]-minprice
        profit=Math.max(profit,curProfit);
    }
    return profit
    };