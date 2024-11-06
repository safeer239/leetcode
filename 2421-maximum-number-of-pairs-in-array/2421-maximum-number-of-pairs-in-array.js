/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    nums.sort((a,b)=>a-b)
    let count=0
    for(let i =0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            nums.shift()
            nums.shift()
            i--
            count++
        }
    }
    return [count,nums.length]
};