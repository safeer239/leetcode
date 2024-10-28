/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let count=new Set()
    let result=[]
    for(let i =0;i<nums.length;i++){
        if(count.has(nums[i])){
            result.push(nums[i])
        }else{
            count.add(nums[i])
        }
    }
    return result
};