/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1=[...new Set(nums1)]
    nums2=[...new Set(nums2)]
    let result=nums2.filter(item=>nums1.includes(item))
    return [...new Set(result)]
};