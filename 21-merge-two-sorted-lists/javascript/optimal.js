class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode();
  let tail = dummy;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 ? list1 : list2;
  return dummy.next;
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
    [[1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]],
    [[], [], []],
    [[], [0], [0]],
    [[5], [], [5]],
    [[1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]],
    [[4, 5, 6], [1, 2, 3], [1, 2, 3, 4, 5, 6]],
    [[1, 1, 1], [1, 1, 1], [1, 1, 1, 1, 1, 1]],
    [[-100, 0, 100], [-50, 50], [-100, -50, 0, 50, 100]],
    [[2], [1], [1, 2]],
    [[1, 3, 5, 7], [2], [1, 2, 3, 5, 7]],
    [[-3, -1], [-2, 0, 2], [-3, -2, -1, 0, 2]],
    [[0, 0], [0], [0, 0, 0]],
    [[1, 2], [1, 2], [1, 1, 2, 2]],
  ];

  let passedCount = 0;
  for (const [values1, values2, expected] of testCases) {
    const list1 = buildLinkedList(values1);
    const list2 = buildLinkedList(values2);
    const actual = linkedListToArray(mergeTwoLists(list1, list2));
    const passed = JSON.stringify(actual) === JSON.stringify(expected);
    if (passed) passedCount++;
    console.log(`Input:    list1 = ${JSON.stringify(values1)}, list2 = ${JSON.stringify(values2)}`);
    console.log(`Expected: ${JSON.stringify(expected)}`);
    console.log(`Actual:   ${JSON.stringify(actual)}`);
    console.log(`Result:   ${passed ? "PASS" : "FAIL"}`);
    console.log();
  }

  console.log(`Passed ${passedCount} of ${testCases.length} tests`);
}

runTests();
