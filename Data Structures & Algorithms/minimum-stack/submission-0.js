class MinStack {
    constructor() {
        this.st = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.st.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.st.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.st[this.st.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        const ns = this.st.toSorted((a, b) => a - b)
        return ns[0]
    }
}
