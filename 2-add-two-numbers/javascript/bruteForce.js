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

function linkedListToBigInt(head) {
  let number = 0n;
  let place = 1n;
  let node = head;
  while (node !== null) {
    number += BigInt(node.val) * place;
    place *= 10n;
    node = node.next;
  }
  return number;
}

function bigIntToLinkedList(number) {
  const dummy = new ListNode();
  let tail = dummy;
  do {
    tail.next = new ListNode(Number(number % 10n));
    tail = tail.next;
    number /= 10n;
  } while (number > 0n);
  return dummy.next;
}

// Brute force: list -> integer, add, integer -> list.
function addTwoNumbers(l1, l2) {
  const total = linkedListToBigInt(l1) + linkedListToBigInt(l2);
  return bigIntToLinkedList(total);
}

function main() {
  const testCases = [
    // [first list, second list, expected result]
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
