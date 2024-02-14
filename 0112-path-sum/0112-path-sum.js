/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    
    // If the current node is a leaf and its value equals the remaining sum, return true
    if (!root.left && !root.right && root.val === targetSum) {
        return true;
    }
    
    // Recursively check if there's a path with the remaining sum on the left or right subtree
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);

};