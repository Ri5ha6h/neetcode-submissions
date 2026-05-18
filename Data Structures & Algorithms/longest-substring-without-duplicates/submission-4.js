class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 0;
        for(let i = 0; i < s.length; i++){
            let chs = new Set();
            for(let j = i; j < s.length; j++){
                if(chs.has(s[j])){
                    break
                }
                chs.add(s[j]);
            }
            max = Math.max(max, chs.size)
        }
        return max;
    }
}
