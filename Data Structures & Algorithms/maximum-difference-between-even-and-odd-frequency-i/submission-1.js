class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        const m = {};
        for(const ch of s){
            m[ch] = (m[ch] || 0) + 1
        }
        const a1 = [];
        const a2 = [];
        for(const v in m){
            if(m[v] % 2 !== 0){
                a1.push(m[v])
            }
            else{
                a2.push(m[v])
            }
        }
        a1.sort((a, b) => b - a);
        a2.sort((a, b) => a - b);
        return a1[0] - a2[0]
    }
}
