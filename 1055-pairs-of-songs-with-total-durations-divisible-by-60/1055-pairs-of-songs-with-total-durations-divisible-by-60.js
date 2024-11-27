/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count=0
    const rem=new Array(60).fill(0)

    for(let i of time){
        let bal =i%60
        let comp=bal===0?0:60-bal
        count+=rem[comp]
        rem[bal]++
    }
    return count
};