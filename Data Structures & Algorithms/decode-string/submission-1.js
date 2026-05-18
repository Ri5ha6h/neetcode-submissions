class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const s1 = [];
        const s2 = [];
        let ms = "";
        let c = 0;

        for(const ch of s){
            if(!isNaN(ch)){
                c = c * 10 + parseInt(ch, 10)
            }
            else if(ch === "["){
                s1.push(ms)
                s2.push(c)
                ms = ''
                c = 0
            }
            else if(ch === "]"){
                const t = ms
                ms = s1.pop()
                const r = s2.pop()
                ms += t.repeat(r)
            }
            else {
                ms += ch
            }
        }
        //console.log(ms)
        return ms;
    }
}
