class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        nums.sort((a, b) => a - b);
        const na = new Array(nums.length).fill(0);
        for(let i = 1; i <= na.length; i++){
            na[i-1] = i;
        }
        const ns1 = new Set(nums);
        const ns2 = new Set(na);
        return [...ns2.difference(ns1)];
        
    }
}
