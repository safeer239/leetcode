/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        if(index[i]==i){
            arr[index[i]]=nums[i]
        }else{
            for(let j=index[i];j<i+1;j++){
                [arr[j],nums[i]]=[nums[i],arr[j]]
            }
        }
    }
    return arr
};