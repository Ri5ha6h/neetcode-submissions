class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        if(words.length === 1) return words[0];

        words.sort();
        const arr = new Set();
        for(const ch of words){
            for(let i = 0; i < words.length; i++){
                if(words[i] !== ch && words[i].includes(ch)){
                    arr.add(ch)
                }
            }
        }
        return [...arr]
    }
}
