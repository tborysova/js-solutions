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
 * @return {number}
 */
var sumNumbers = function (root) {

    function dfs(cur, num) {
        if (!cur) {
            return 0;
        }

        num = num * 10 + cur.val;
        if (!cur.left && !cur.right) {
            return num;
        }

        return dfs(cur.left, num) + dfs(cur.right, num);
    }

    return dfs(root, 0);

};