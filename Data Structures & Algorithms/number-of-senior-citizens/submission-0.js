class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let count = 0;
        for(let i = 0; i < details.length; i++){
            const age = details[i].substring(11, details[i].length - 2)
            if(Number.parseInt(age) > 60){
                count++;
            }
        }
        return count
    }
}
