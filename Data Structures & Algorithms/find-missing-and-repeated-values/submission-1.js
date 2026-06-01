class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const ng = grid.flat();
        ng.sort((a, b) => a - b);
        const st = [];
        for(let i = 1; i <= ng.length; i++) st.push(i);
        const arr = new Array(2);
        let rep = 0;
        let  i = ng.length - 1;
        while(i >= 0){
            if(ng[i] === st[st.length - 1]){
                const p = st.pop()
                rep = p
                i--
            }
            else if(ng[i] === rep){
                arr[0] = rep
                i--
            }
            else {
                arr[1] = st.pop()
            }
            //console.log(st, arr)
        }
        return st[0] ? [arr[0], st[0]] : arr;
    }
}
