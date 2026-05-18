class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        // nums.sort((a, b) => a - b)
        // const nw = {};
        // for(let i = 0; i < nums.length; i++){
        //     nw[nums[i]] = (nw[nums[i]] || 0) + 1;
        // }
        
        // let max = 0;
        // let el = 0;
        // for(const n in nw){
        //     if(nw[n] > max){
        //         max = nw[n]
        //         el = n
        //     }
        // }
        // return el;

        const nw = new Map();
        let el = 0, max = 0;
        for(let n of nums){
            nw.set(n, (nw.get(n) || 0) + 1);
            if(nw.get(n) > max){
                el = n;
                max = nw.get(n);
            }
        }

        return el;
    }
}
