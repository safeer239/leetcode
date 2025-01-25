/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
        let neg=new Set()
    let pos=new Set()
    
    for(let i=0;i<nums.length;i++){
       if(nums[i]<0){
           neg.add(nums[i])
       } else{
           pos.add(nums[i])
       }
    }
    let arr=[]
    for(let j=0;j<nums.length;j++){
        if(neg.has(-nums[j])&&pos.has(nums[j])){
            arr.push(nums[j])
        }
    }
    return arr.length?Math.max(...arr):-1
};