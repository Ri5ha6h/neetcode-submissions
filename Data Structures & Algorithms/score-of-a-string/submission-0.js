class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        if(s === "") return 0
        let sum = 0;
        for(let i = 1; i < s.length; i++){
            const sub = Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1))
            sum += sub
        }
        return sum
    }
}
