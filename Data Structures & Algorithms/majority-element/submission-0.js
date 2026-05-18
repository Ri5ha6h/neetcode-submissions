class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        nums.sort((a, b) => a - b)
        const nw = {};
        for(let i = 0; i < nums.length; i++){
            nw[nums[i]] = (nw[nums[i]] || 0) + 1;
        }
        
        let max = 0;
        let el = 0;
        for(const n in nw){
            if(nw[n] > max){
                max = nw[n]
                el = n
            }
        }
        return el;
    }
}
