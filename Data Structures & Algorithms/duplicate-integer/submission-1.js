class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const updatedSet = new Set(nums);
        // return updatedSet.size !== nums.length;
        const nm = new Map();
        for(let i = 0; i < nums.length; i++){
            if(nm.has(nums[i])){
                return true;
            }
            else{
                nm.set(nums[i], 1);
            }
        }
        return false;
    }
}
