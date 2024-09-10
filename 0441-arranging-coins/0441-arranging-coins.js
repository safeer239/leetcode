/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let k=0;
    while(n>k){
        k++
        n-=k
    }
    return k
};