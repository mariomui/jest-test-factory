/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/*
let p0 = start of LL
let p1 = end of LL
if p0.val != p1.val, return false
let q0 = p0.next
let q1 = q0
while q1.next != p1, q1 = q1.next (so q0 and q1 represent the "next pair to check")
if q0.val != q1.val, return false
*/
var isPalindrome = function (head) {
  let fp = head
  let lp = head;
  let counter = 0;
  if (!head) {
    return true
  }
  while (lp.next) {
    lp = lp.next
    counter++;
  }
  if (fp.val !== lp.val) {
    return false
  }
  counter = (counter / 2) - 1;
  counter = Math.ceil(counter);

  let trip = 0;
  while (trip < counter) {
    let saved = lp
    lp = fp.next
    fp = fp.next
    while (lp.next != saved) {
      lp = lp.next
    }
    if (fp.val !== lp.val) {
      return false
    }
    trip++
  }
  return true;
}