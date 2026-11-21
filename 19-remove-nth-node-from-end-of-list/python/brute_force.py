class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def remove_nth_from_end(head, n):
    length = 0
    current = head
    while current:
        length += 1
        current = current.next
    target_index = length - n
    if target_index == 0:
        return head.next
    previous = head
    for _ in range(target_index - 1):
        previous = previous.next
    previous.next = previous.next.next
    return head


def build_linked_list(values):
    dummy = ListNode()
    tail = dummy
    for value in values:
        tail.next = ListNode(value)
        tail = tail.next
    return dummy.next


def linked_list_to_list(head):
    values = []
    current = head
    while current:
        values.append(current.val)
        current = current.next
    return values


def run_tests():
    test_cases = [
        ([1, 2, 3, 4, 5], 2, [1, 2, 3, 5]),
        ([1], 1, []),
        ([1, 2], 1, [1]),
        ([1, 2], 2, [2]),
        ([1, 2, 3], 3, [2, 3]),
        ([1, 2, 3], 1, [1, 2]),
        ([1, 2, 3], 2, [1, 3]),
        ([10, 20, 30, 40, 50], 5, [20, 30, 40, 50]),
        ([10, 20, 30, 40, 50], 1, [10, 20, 30, 40]),
        ([5, 5, 5, 5], 2, [5, 5, 5]),
        ([0, 100], 1, [0]),
        ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, [1, 2, 3, 4, 5, 6, 8, 9, 10]),
        ([1, 2, 3, 4, 5, 6], 3, [1, 2, 3, 5, 6]),
    ]

    passed_count = 0
    for values, n, expected in test_cases:
        head = build_linked_list(values)
        actual = linked_list_to_list(remove_nth_from_end(head, n))
        passed = actual == expected
        passed_count += passed
        print(f"Input:    head = {values}, n = {n}")
        print(f"Expected: {expected}")
        print(f"Actual:   {actual}")
        print(f"Result:   {'PASS' if passed else 'FAIL'}")
        print()

    print(f"Passed {passed_count} of {len(test_cases)} tests")


if __name__ == "__main__":
    run_tests()
