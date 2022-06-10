/**
 * 给你两个非空 的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10); // head tail 指针相同地址
        } else {
            tail.next = new ListNode(sum % 10); // 添加尾节点next值
            tail = tail.next; // 修改tail指针指向next，这时与head.next同指向
        }
        carry = Math.floor(sum / 10); // 计算进位值
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    // 最后一个进位值大于0时，直接采用进位值
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};


const v1 = new ListNode(5, new ListNode(6, new ListNode(7)));
const v2 = new ListNode(3, new ListNode(5, new ListNode(4)));

console.log(addTwoNumbers(v1, v2)); // 765 + 453 = 218
