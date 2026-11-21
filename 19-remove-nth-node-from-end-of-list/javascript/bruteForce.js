class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeNthFromEnd(head, n) {
  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }
  const targetIndex = length - n;
  if (targetIndex === 0) {
    return head.next;
  }
  let previous = head;
  for (let step = 0; step < targetIndex - 1; step++) {
    previous = previous.next;
  }
  previous.next = previous.next.next;
  return head;
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

function linkedListToArray(head) {
  const values = [];
  let current = head;
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  return values;
}

function runTests() {
  const testCases = [
    [[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]],
    [[1], 1, []],
    [[1, 2], 1, [1]],
    [[1, 2], 2, [2]],
    [[1, 2, 3], 3, [2, 3]],
    [[1, 2, 3], 1, [1, 2]],
    [[1, 2, 3], 2, [1, 3]],
    [[10, 20, 30, 40, 50], 5, [20, 30, 40, 50]],
    [[10, 20, 30, 40, 50], 1, [10, 20, 30, 40]],
    [[5, 5, 5, 5], 2, [5, 5, 5]],
    [[0, 100], 1, [0]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, [1, 2, 3, 4, 5, 6, 8, 9, 10]],
    [[1, 2, 3, 4, 5, 6], 3, [1, 2, 3, 5, 6]],
  ];

  let passedCount = 0;
  for (const [values, n, expected] of testCases) {
    const head = buildLinkedList(values);
    const actual = linkedListToArray(removeNthFromEnd(head, n));
    const passed = JSON.stringify(actual) === JSON.stringify(expected);
    if (passed) passedCount++;
    console.log(`Input:    head = ${JSON.stringify(values)}, n = ${n}`);
    console.log(`Expected: ${JSON.stringify(expected)}`);
    console.log(`Actual:   ${JSON.stringify(actual)}`);
    console.log(`Result:   ${passed ? "PASS" : "FAIL"}`);
    console.log();
  }

  console.log(`Passed ${passedCount} of ${testCases.length} tests`);
}

runTests();
