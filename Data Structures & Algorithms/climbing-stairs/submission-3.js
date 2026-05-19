class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n <= 2) return n

        let prev = 1
        let next = 2
        let ways = 0
        for(let i = 3; i <= n; i++){
            ways = prev + next
            prev = next
            next = ways
        }
        return ways
    }
}
