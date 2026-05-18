class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isValid(s) {
    const m = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    const arr = [];
    for(const ch of s){
        //console.log(arr)
        if(m[ch] && arr[arr.length - 1] === m[ch]){
            arr.pop()
        }
        else{
            arr.push(ch)
        }
    }
    //console.log(arr)
    if(arr.length > 0) return false
    return true
  }
}
