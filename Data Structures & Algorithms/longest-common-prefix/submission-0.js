class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if(strs.length === 1) return strs[0];

        let x = ""
        let pre = ""
        for(let i = 0; i < strs[0].length; i++){
            x += strs[0][i]
            let t = false
            for(let j = 1; j < strs.length; j++){
                if(!strs[j].includes(x)){
                    t = true
                    break
                }
            }
            if(t) break
            pre = x
        }
        return pre
    }
}
