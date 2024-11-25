/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1=new Set(nums1)
    let set2= new Set(nums2)
    let num1=[]
    let num2=[]
    for (let value of set1) {
        if (!set2.has(value)) {
            num1.push(value);
        }
    }
    for (let value of set2) {
        if (!set1.has(value)) {
            num2.push(value);
        }
    }
    return [num1,num2]
};