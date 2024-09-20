/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increase=false
    let decrease=false
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i-1]){
            increase= true
        }
        else if(nums[i]<nums[i-1]){
            decrease=true
        }
        if(increase && decrease)return false
    }
    return true
};