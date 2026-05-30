class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const ob = {}
        for(const ch of arr){
            ob[ch] = (ob[ch] || 0) + 1;
        }
        let i = 1;
        for(const x in ob){
            if(ob[x] === 1){
                if(i === k){
                    return x;
                }
                i++;
            }
        }
        return "";
    }
}
