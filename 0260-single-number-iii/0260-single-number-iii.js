/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let check={}
    for(el of nums){
        check[el]=(check[el] || 0)+1
    }
    let arr=[]
    for(el in check){
        if(check[el]==1){
            arr.push(Number(el))
        }
    }
    return arr
};