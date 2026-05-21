class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if(s.length > t.length) return false
        let x = 0;
        for(let i = 0; i < t.length; i++){
            if(s[x] === t[i]){
                x++;
            }
        }
        // while(t.length > 0){
        //     if(s[x] === t[0]){
        //         x++
        //     }
        //     t = t.substring(1, t.length)
        // }

        return x === s.length
    }
}
