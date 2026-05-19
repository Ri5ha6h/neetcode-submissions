class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n <= 3) return n

        let prev = 2
        let next = 3
        let ways = 0
        for(let i = 4; i <= n; i++){
            ways = prev + next
            prev = next
            next = ways
        }
        return ways
    }
}
