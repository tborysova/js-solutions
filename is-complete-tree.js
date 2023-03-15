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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
    const q = [root];

    while (q.length) {
        const node = q.shift();

        if (node) {
            q.push(node.left);
            q.push(node.right);
        } else {
            while (q.length) {
                if (q.shift()) {
                    return false;
                }
            }
            return true;
        }
    }

    return true;

};