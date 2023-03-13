var containsDuplicate = function (nums) {
    if (nums.length === 1) {
        return true;
    }

    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    return false;
};