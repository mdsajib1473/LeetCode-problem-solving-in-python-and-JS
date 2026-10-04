class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function buildLinkedList(values) {
  const dummy = new ListNode();
  let tail = dummy;
  for (const value of values) {
    tail.next = new ListNode(value);
    tail = tail.next;
  }
  return dummy.next;
}

function linkedListToString(head) {
  const parts = [];
  let node = head;
  while (node !== null) {
    parts.push(String(node.val));
    node = node.next;
  }
  return parts.length > 0 ? parts.join(" -> ") : "(empty)";
}

function printLinkedList(head, label = "") {
  const prefix = label ? label + ": " : "";
  console.log(prefix + linkedListToString(head));
}

function addTwoNumbers(l1, l2) {
  const dummy = new ListNode();
  let tail = dummy;
  let carry = 0;

  let p1 = l1;
  let p2 = l2;
  while (p1 !== null || p2 !== null || carry > 0) {

    const x = p1 !== null ? p1.val : 0;
    const y = p2 !== null ? p2.val : 0;

    const total = x + y + carry;
    carry = Math.floor(total / 10);
    tail.next = new ListNode(total % 10);
    tail = tail.next;

    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
  }

  return dummy.next;
}

function main() {
  const testCases = [
    [[2, 4, 3], [5, 6, 4], [7, 0, 8]],   // 342 + 465 = 807
    [[9, 9, 9], [1], [0, 0, 0, 1]],      // 999 + 1 = 1000
    [[1, 8], [0], [1, 8]],               // 81 + 0 = 81
    [[0], [0], [0]],                     // both zero
  ];

  for (const [first, second, expected] of testCases) {
    const l1 = buildLinkedList(first);
    const l2 = buildLinkedList(second);
    const result = addTwoNumbers(l1, l2);

    printLinkedList(l1, "l1");
    printLinkedList(l2, "l2");
    printLinkedList(result, "sum");
    console.log("expected: " + expected.join(" -> "));
    console.log();
  }
}

main();
