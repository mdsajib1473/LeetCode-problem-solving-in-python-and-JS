/*
 * LeetCode 2: Add Two Numbers  (optimal approach)
 *
 * Idea:
 *   Walk both lists at the same time and add the two digits in the current
 *   position plus whatever carry came out of the previous position. Each step
 *   produces one output digit (total % 10) and one new carry (floor(total / 10)).
 *   When a list runs out we treat its missing digits as 0, and after both lists
 *   end we still append a node if a carry is left over.
 *
 * Time complexity:  O(max(n, m))
 *   one pass, one iteration per output digit.
 * Space complexity: O(max(n, m)) for the answer list, or O(1) extra if the
 *   output list is not counted. No big intermediate number is built, so there
 *   is no precision limit to worry about.
 */

// Single node of a singly linked list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Build a linked list from an array and return its head.
function buildLinkedList(values) {
  const dummy = new ListNode(); // placeholder so we never special case the head
  let tail = dummy;
  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }
  return dummy.next;
}

// Render a linked list as '1 -> 2 -> 3' for printing.
function linkedListToString(head) {
  const parts = [];
  let node = head;
  while (node !== null) {
    parts.push(String(node.val));
    node = node.next;
  }
  return parts.length > 0 ? parts.join(" -> ") : "(empty)";
}

// Print a linked list, optionally prefixed with a label.
function printLinkedList(head, label = "") {
  const prefix = label ? label + ": " : "";
  console.log(prefix + linkedListToString(head));
}

// Single pass digit by digit addition with a running carry.
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(); // dummy head keeps the append logic uniform
  let tail = dummy;
  let carry = 0;

  // Keep going while either list has digits left or a carry is pending.
  let p1 = l1;
  let p2 = l2;
  while (p1 !== null || p2 !== null || carry > 0) {
    // A finished list contributes 0, which handles unequal lengths.
    const x = p1 !== null ? p1.val : 0;
    const y = p2 !== null ? p2.val : 0;

    const total = x + y + carry;
    carry = Math.floor(total / 10); // 0 or 1, since each operand is a digit
    tail.next = new ListNode(total % 10);
    tail = tail.next;

    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
  }

  return dummy.next;
}

function main() {
  const testCases = [
    // [first list, second list, expected result]
    [[2, 4, 3], [5, 6, 4], [7, 0, 8]],   // 342 + 465 = 807
    [[9, 9, 9], [1], [0, 0, 0, 1]],      // 999 + 1 = 1000, carry adds a digit
    [[1, 8], [0], [1, 8]],               // 81 + 0 = 81, different lengths
    [[0], [0], [0]],                     // both zero
  ];

  for (const [first, second, expected] of testCases) {
    const l1 = buildLinkedList(first);
    const l2 = buildLinkedList(second);
    const result = addTwoNumbers(l1, l2);

    // addTwoNumbers walks copies of the head pointers, so l1 and l2 are intact.
    printLinkedList(l1, "l1");
    printLinkedList(l2, "l2");
    printLinkedList(result, "sum");
    console.log("expected: " + expected.join(" -> "));
    console.log();
  }
}

main();
