/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(head === null){
            return head
        }
        let curr = head;
        const l = [];
        while (curr != null){
            l.push(curr.val)
            curr = curr.next
        }
        //console.log(l)
        l.reverse();
        let nh = new ListNode(l[0])
        let nt = nh
        for(let i = 1; i < l.length; i++){
            nt.next = new ListNode(l[i])
            nt = nt.next
        }
        return nh;
    }
}
