class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const len1 = nums1.length
        const len2 = nums2.length
        const arr = []

        for(let i = 0; i < len1; i++){
            const org = nums1[i]
            let max = nums1[i]
            const ind = nums2.indexOf(nums1[i])
            let j = ind + 1
            while(j < len2){
                if(nums2[j] > max){
                    arr.push(nums2[j])
                    max = nums2[j]
                    break;
                }
                j++
            }
            if(org === max) arr.push(-1)
        }
        return arr
    }
}
