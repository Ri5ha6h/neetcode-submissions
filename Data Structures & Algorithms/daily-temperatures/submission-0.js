class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const len = temperatures.length
        const arr = []
        for(let i = 0; i < len; i++){
            let cn = false;
            for(let j = i+1; j < len; j++){
                if(!cn && temperatures[j] > temperatures[i]){
                    arr.push(j - i)
                    cn = true
                }
            }
            if(!cn) arr.push(0)
        }
        //console.log(arr)
        return arr;
    }
}
