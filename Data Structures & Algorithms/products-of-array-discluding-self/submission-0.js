class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = []
        let exc = 0;
        while(exc < nums.length){
            let mul = 1;
            for(let i = 0; i < nums.length; i++){
                if(i === exc) continue
                mul = mul * nums[i];
            }
            arr.push(mul)
            exc++;
        }
        return arr
    }
}
