/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     nums.sort((a,b)=>a-b)
    for(i=0;i<nums.length;i+=2){
       if (i === nums.length-1  || nums[i] !== nums[i + 1]) {
            return nums[i];  
        }
    }
};