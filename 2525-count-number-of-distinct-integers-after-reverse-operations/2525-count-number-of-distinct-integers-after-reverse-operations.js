/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let set = new Set(nums)
for(let i=0; i<nums.length; i++) {
  set.add(Number(nums[i].toString().split('').reverse().join('')))
}
return set.size
};