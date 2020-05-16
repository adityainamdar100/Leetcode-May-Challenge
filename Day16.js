/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head===null)
        return head;
    let head2 = ListNode(undefined,null);
    let temp = head;
    let temp2 = ListNode(undefined,null);
    let cnt = 0;
    while(temp!=null) {
        if(temp.next===null)
            break;
        if(cnt===0) {
            let temp3 = temp.next;
            temp.next = temp.next.next;
            temp3.next = null;
            head2 = temp3;
            temp2 = head2;
        } else {
            let temp3 = temp.next;
            temp.next = temp3.next;
            temp3.next = null;
            temp2.next = temp3;
            temp2 = temp2.next;}
        if(temp.next!==null)
            temp = temp.next;
        cnt += 1;
    }
    temp.next = head2;
    return head;
};
