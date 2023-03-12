/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length == 0) {
        return null;
    }
    let values = [];
    for (let i = 0; i < lists.length; i++) {
        let curr = lists[i];
        while (curr) {
            values.push(new ListNode(curr.val));
            curr = curr.next;
        }
    }
    values.sort((a, b) => a.val - b.val);
    if (values.length === 0) {
        return null;
    }

    let head = null;
    for (let j = 0; j < values.length; j++) {
        if (head == null) {
            head = values[j];
        } else {
            head.next = values[j];
            head = head.next;
        }
    }

    return values[0];
};