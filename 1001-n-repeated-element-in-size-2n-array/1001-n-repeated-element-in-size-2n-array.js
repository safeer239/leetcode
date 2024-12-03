/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let newSet=new Set()
    for(let el of nums){
        if(newSet.has(el)){
            return el
        }
        newSet.add(el)
    }
};