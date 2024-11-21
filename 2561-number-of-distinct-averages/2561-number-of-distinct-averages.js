/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {  
    let result=[]
    nums=nums.sort((a,b)=>a-b)
    while(nums.length>1){
    result.push((nums.shift()+nums.pop())/2)
    }
    return [...new Set(result)].length
};
