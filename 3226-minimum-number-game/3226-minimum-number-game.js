/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr=[]
    let size=nums.length/2
    while(size>0){
    let alice=Math.min(...nums)
    nums.splice(nums.indexOf(alice),1)
    let bob=Math.min(...nums)
    nums.splice(nums.indexOf(bob),1)
    arr.push(bob,alice);
    size--
    }
    return arr;
};