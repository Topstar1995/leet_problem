/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1; // Index of last element in nums1
    let index2 = n - 1; // Index of last element in nums2
    let mergedIndex = m + n - 1; // Index of last element in merged array

    // Merge nums1 and nums2 from the end
    while (index1 >= 0 && index2 >= 0) {
        if (nums1[index1] > nums2[index2]) {
            nums1[mergedIndex] = nums1[index1];
            index1--;
        } else {
            nums1[mergedIndex] = nums2[index2];
            index2--;
        }
        mergedIndex--;
    }

    // If there are remaining elements in nums2, they need to be placed in nums1
    while (index2 >= 0) {
        nums1[mergedIndex] = nums2[index2];
        index2--;
        mergedIndex--;
    }
};