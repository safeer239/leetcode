/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let pairs= Math.floor(nums.length/2)
    let count={}
    for(let el of nums){
        count[el]=(count[el]||0)+1
    }
    for(let el in count){
        if(count[el]%2===0){
            pairs-=(count[el]/2)
        }
    }
    return pairs===0?true:false
};