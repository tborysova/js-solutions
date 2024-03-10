/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const hashSet = new Set(nums1);
    const array = [];
    
    for (const num of nums2) {
        if (hashSet.has(num)) {
            array.push(num);
            hashSet.delete(num);
        }
    }
    
return array;
};