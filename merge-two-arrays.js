var merge = function (nums1, m, nums2, n) {
    if (m === 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    }

    for (let i = m, k = 0; i < m, k < n; i++, k++) {
        nums1[m] = nums2[k];
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);


