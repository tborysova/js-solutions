/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let leftPointer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[leftPointer], nums[i]] = [nums[i], nums[leftPointer]];
            leftPointer++;
        }
    }
};

let array = [3, 0, 0, 5, 0, 2, 7];
moveZeroes(array);
console.log(array);


















