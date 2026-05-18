class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // second attempt
        if(s.length !== t.length) return false;

        const hash1 = new Map();
        const hash2 = new Map();

        for(let i = 0; i < s.length; i++){
            if(hash1.has(s[i])){
                hash1.set(s[i], hash1.get(s[i]) + 1)
            }
            else{
                hash1.set(s[i], 1)
            }

            if(hash2.has(t[i])){
                hash2.set(t[i], hash2.get(t[i]) + 1)
            }
            else{
                hash2.set(t[i], 1)
            }
        }

        //console.log(hash1, hash2)
        for(const j of hash1.keys()){
            if(hash1.get(j) !== hash2.get(j)){
                return false;
            }
        }

        return true

        // first attempt
        // const ups = s.split("").toSorted().join("");
        // const upt = t.split("").toSorted().join("");
        // return ups === upt;
    }
}
