/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    const result = [];
    const dfs = (i, nums, curr) => {
        if (i === nums.length) {
            result.push(curr.slice());
            return;
        }

        dfs(i + 1, nums, curr);

        curr.push(nums[i]);
        dfs(i + 1, nums, curr);
        curr.pop();
    }
    dfs(0, nums, []);
    return result;
};