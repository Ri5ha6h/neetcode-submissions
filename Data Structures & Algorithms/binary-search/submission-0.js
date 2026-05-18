class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0
        let right = nums.length
        while(left < right){
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] === target){
                return mid;
            }
            else if (((left + 1 === right) || (left === right - 1)) && nums[mid] !== target){
                return -1;
            }
            else if (nums[mid] < target){
                left = mid;
            }
            else if (nums[mid] > target){
                right = mid;
            }
        }
    }
}
