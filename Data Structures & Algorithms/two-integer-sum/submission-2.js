class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length < 2) return [];
        const seen = new Map();
        for(let i = 0; i < nums.length; i++){
            const need = target - nums[i];

            if(seen.has(need)){
                return [seen.get(need), i];
            }

            seen.set(nums[i], i);
        }

        return [];
        // for (let i = 0; i < nums.length; i++){
        //     for (let j = i + 1; j <= nums.length - 1; j++){
        //         const addition = nums[i] + nums[j]
        //         if (addition === target) {
        //             return [i, j]
        //         }
        //     }
        // }
    }
}
