class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        // const len = nums.length
        // const arr = new Array(len * 2).fill(0);
        // for(let i = 0; i < arr.length; i++){
        //     if(i >= len){
        //         arr[i] = nums[i - len]
        //     }
        //     else {
        //         arr[i] = nums[i]
        //     }
        // }
        // return arr
        return [...nums, ...nums]
    }
}
