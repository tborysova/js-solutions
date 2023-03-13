/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function (nums) {
    let set = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};


console.log(missingNumber([1, 2, 3, 0]));