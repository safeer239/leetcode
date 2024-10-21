/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    return Math.max(findPos(nums),findNeg(nums))
};

const findPos = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] > 0) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return nums.length - start;
};

const findNeg = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] < 0) {
            start = mid + 1; 
        } else {
            end = mid - 1;
        }
    }
    return end + 1;
};