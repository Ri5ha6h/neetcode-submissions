class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        console.log(arr.length)
        const len = arr.length
        const narr = new Array(len).fill(-1)
        for(let i = 0; i < len - 1; i++){
            let max = 0;
            for(let j = i + 1; j < len; j++){
                if(arr[j] > max){
                    max = arr[j]
                }
            }
            narr[i] = max;
        }
        //console.log(narr)
        return narr
    }
}
