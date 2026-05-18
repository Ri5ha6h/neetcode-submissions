class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length === 1) return [[strs[0]]]

        const ns = [];
        for(let i = 0; i < strs.length; i++){
            ns.push(strs[i].split("").sort().join(""))
        }
        //console.log(ns)
        
        const nm = {}
        for(let i = 0; i < ns.length; i++){
            nm[ns[i]] = nm[ns[i]] ? `${nm[ns[i]]},${i}` : `${i}`
        }
        //console.log(nm)
        
        const arr = []
        for(const str in nm){
            const na = []
            const strSpl = nm[str].includes(",") ? nm[str].split(",") : [nm[str]]
            //console.log(strSpl)
            for(let i = 0; i < strSpl.length; i++){
                na.push(strs[strSpl[i]])
            }
            arr.push(na)
        }
        //console.log(arr)
        return arr
    }
}
