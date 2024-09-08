/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let curMin = 0, curMax = 0;
    let sum = 0;
    let minSum = nums[0];
    let maxSum = nums[0];
    
    for (let num of nums) {
        curMax = Math.max(curMax + num, num);
        maxSum = Math.max(curMax, maxSum);
        
        curMin = Math.min(curMin + num, num);
        minSum = Math.min(curMin, minSum);
        
        sum += num;
    }
    
    // If all numbers are negative, return maxSum (which is the least negative number)
    return sum === minSum ? maxSum : Math.max(maxSum, sum - minSum);
};
