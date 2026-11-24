class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def merge_two_lists(list1, list2):
    values = []
    for head in (list1, list2):
        current = head
        while current:
            values.append(current.val)
            current = current.next
    values.sort()
    return build_linked_list(values)


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
        ([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]),
        ([], [], []),
        ([], [0], [0]),
        ([5], [], [5]),
        ([1, 2, 3], [4, 5, 6], [1, 2, 3, 4, 5, 6]),
        ([4, 5, 6], [1, 2, 3], [1, 2, 3, 4, 5, 6]),
        ([1, 1, 1], [1, 1, 1], [1, 1, 1, 1, 1, 1]),
        ([-100, 0, 100], [-50, 50], [-100, -50, 0, 50, 100]),
        ([2], [1], [1, 2]),
        ([1, 3, 5, 7], [2], [1, 2, 3, 5, 7]),
        ([-3, -1], [-2, 0, 2], [-3, -2, -1, 0, 2]),
        ([0, 0], [0], [0, 0, 0]),
        ([1, 2], [1, 2], [1, 1, 2, 2]),
    ]

    passed_count = 0
    for values1, values2, expected in test_cases:
        list1 = build_linked_list(values1)
        list2 = build_linked_list(values2)
        actual = linked_list_to_list(merge_two_lists(list1, list2))
        passed = actual == expected
        passed_count += passed
        print(f"Input:    list1 = {values1}, list2 = {values2}")
        print(f"Expected: {expected}")
        print(f"Actual:   {actual}")
        print(f"Result:   {'PASS' if passed else 'FAIL'}")
        print()

    print(f"Passed {passed_count} of {len(test_cases)} tests")


if __name__ == "__main__":
    run_tests()
