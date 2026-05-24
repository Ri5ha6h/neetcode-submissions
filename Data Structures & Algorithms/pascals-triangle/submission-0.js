class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const arr = [];

        for(let i = 1; i <= numRows; i++){
            const na = new Array(i);
            if(i > 2){
                na[0] = 1;
                na[i - 1] = 1;
                let j = 1;
                while(j < i - 1){
                    na[j] = arr[i - 2][j] + arr[i - 2][j - 1]
                    j++
                }
            }
            else {
                na[0] = 1;
                if(i === 2) na[1] = 1;
            }
            arr.push(na)
        }
        //console.log(arr)
        return arr
    }
}
