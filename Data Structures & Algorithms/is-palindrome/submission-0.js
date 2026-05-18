class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const newStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
        const updatedStr = newStr.split("").reverse().join("");
        return updatedStr === newStr;
    }
}
