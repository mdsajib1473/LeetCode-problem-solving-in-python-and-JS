/*
 * LeetCode 2: Add Two Numbers  (brute force approach)
 *
 * Idea:
 *   1. Walk each linked list and rebuild the integer it stands for. Digits are
 *      stored in reverse order, so the node at index i carries place value 10**i.
 *   2. Add the two integers with ordinary arithmetic.
 *   3. Convert the sum back into a linked list, again in reverse digit order.
 *
 * Time complexity:  O(n + m)
 *   n and m are the lengths of the two lists. Reading both lists is O(n + m),
 *   and emitting the result costs O(max(n, m) + 1) nodes.
 * Space complexity: O(max(n, m))
 *   for the nodes of the answer list, plus the intermediate numbers.
 *
 * Caveat: a JS Number only holds 15 to 16 safe digits, so BigInt is used here.
 * That is exactly the weakness the optimal digit by digit method avoids.
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

// Read the list back to front, so digit i contributes digit * 10**i.
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

// Split an integer into digits, least significant digit first.
function bigIntToLinkedList(number) {
  const dummy = new ListNode();
  let tail = dummy;
  // A do while loop so the value 0 still produces a single node.
  do {
    tail.next = new ListNode(Number(number % 10n));
    tail = tail.next;
    number /= 10n; // BigInt division truncates, so this drops the last digit
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
    [[9, 9, 9], [1], [0, 0, 0, 1]],      // 999 + 1 = 1000, carry adds a digit
    [[1, 8], [0], [1, 8]],               // 81 + 0 = 81, different lengths
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
