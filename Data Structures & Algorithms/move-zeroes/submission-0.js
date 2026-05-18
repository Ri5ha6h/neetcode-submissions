class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        if(nums.length === 0) return nums

        const newArr = new Array(nums.length).fill(0)
        let j = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] !== 0){
                newArr[j] = nums[i]
                j++
            }
        }
        
        for(let k = 0; k < newArr.length; k++){
            nums[k] = newArr[k]
        }
    }
}
