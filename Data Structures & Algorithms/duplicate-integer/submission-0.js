class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const updatedSet = new Set(nums);
        return updatedSet.size !== nums.length;
    }
}
