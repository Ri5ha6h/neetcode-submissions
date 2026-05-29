class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let leftsum = 0;
        for(let i = 0; i < nums.length; i++){
            let rightsum = 0;
            for(let j = i + 1; j < nums.length; j++){
                rightsum += nums[j]
            }
            if(leftsum === rightsum){
                return i;
            }
            leftsum += nums[i]
        }
        return -1;
    }
}
