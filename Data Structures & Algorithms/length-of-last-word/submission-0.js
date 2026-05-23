class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        s = s.trim();
        if(!s.includes(" ")) return s.length
        return s.substring(s.lastIndexOf(" ") + 1, s.length).length;
    }
}
