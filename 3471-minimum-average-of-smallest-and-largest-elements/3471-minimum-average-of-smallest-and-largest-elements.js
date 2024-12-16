/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let average=[]
    nums=nums.sort((a,b)=>a-b)
    while(nums.length>1){
    average.push((nums.shift()+nums.pop())/2)
    }
    return Math.min(...average)
};