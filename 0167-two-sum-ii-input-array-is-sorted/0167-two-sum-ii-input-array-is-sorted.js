/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let obj={}
    for(let i =0;i<numbers.length;i++){
        var n=numbers[i]
       if(obj[target-n]>=0){
        return [obj[target-n]+1,i+1]
       }else{
        obj[n]=i
       }
    }
};