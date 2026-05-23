class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCons = 0;
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                count++
            }
            else {
                if(count > maxCons){
                    maxCons = count
                }
                count = 0;
            }
        }
        return maxCons > count ? maxCons : count;
    }
}
