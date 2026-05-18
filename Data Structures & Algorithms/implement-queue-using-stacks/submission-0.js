class MyQueue {
    constructor() {
        this.que = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.que.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        return this.que.splice(0, 1)
    }

    /**
     * @return {number}
     */
    peek() {
        return this.que[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.que.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
