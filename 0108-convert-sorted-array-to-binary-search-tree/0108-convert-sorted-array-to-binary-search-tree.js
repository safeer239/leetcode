/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function createTree(left,right){
        if(left>right)return null
        const middle=left+Math.floor((right-left)/2)
        const root=new TreeNode(nums[middle])
        root.left=createTree(left,middle-1)
        root.right=createTree(middle+1,right)
        return root
    }
    return createTree(0,nums.length-1)
};