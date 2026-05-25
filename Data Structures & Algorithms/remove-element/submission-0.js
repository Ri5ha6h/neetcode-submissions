class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const arr = new Array(nums.length).fill("_");
        let c = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== val){
                arr[c] = nums[i]
                c++
            }
        }
        
        for(let i = 0; i < arr.length; i++){
            nums[i] = arr[i]
        }
        return c
    }
}
