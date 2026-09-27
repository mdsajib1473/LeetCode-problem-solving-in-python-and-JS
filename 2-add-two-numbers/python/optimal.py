"""
LeetCode 2: Add Two Numbers  (optimal approach)

Idea:
    Walk both lists at the same time and add the two digits in the current
    position plus whatever carry came out of the previous position. Each step
    produces one output digit (total % 10) and one new carry (total // 10).
    When a list runs out we treat its missing digits as 0, and after both lists
    end we still append a node if a carry is left over.

Time complexity:  O(max(n, m))
    one pass, one iteration per output digit.
Space complexity: O(max(n, m)) for the answer list, or O(1) extra if the
    output list is not counted. No intermediate big integer is built, so this
    also works in languages with fixed width integers.
"""


class ListNode:
    """Single node of a singly linked list."""

    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def build_linked_list(values):
    """Build a linked list from a Python list and return its head."""
    dummy = ListNode()          # placeholder so we never special case the head
    tail = dummy
    for value in values:
        tail.next = ListNode(value)
        tail = tail.next
    return dummy.next


def linked_list_to_string(head):
    """Render a linked list as '1 -> 2 -> 3' for printing."""
    parts = []
    node = head
    while node is not None:
        parts.append(str(node.val))
        node = node.next
    return " -> ".join(parts) if parts else "(empty)"


def print_linked_list(head, label=""):
    """Print a linked list, optionally prefixed with a label."""
    prefix = label + ": " if label else ""
    print(prefix + linked_list_to_string(head))


def add_two_numbers(l1, l2):
    """Single pass digit by digit addition with a running carry."""
    dummy = ListNode()          # dummy head keeps the append logic uniform
    tail = dummy
    carry = 0

    # Keep going while either list has digits left or a carry is pending.
    while l1 is not None or l2 is not None or carry:
        # A finished list contributes 0, which handles unequal lengths.
        x = l1.val if l1 is not None else 0
        y = l2.val if l2 is not None else 0

        total = x + y + carry
        carry = total // 10         # 0 or 1, since each operand is a digit
        tail.next = ListNode(total % 10)
        tail = tail.next

        if l1 is not None:
            l1 = l1.next
        if l2 is not None:
            l2 = l2.next

    return dummy.next


def main():
    test_cases = [
        # (first list, second list, expected result)
        ([2, 4, 3], [5, 6, 4], [7, 0, 8]),      # 342 + 465 = 807
        ([9, 9, 9], [1], [0, 0, 0, 1]),         # 999 + 1 = 1000, carry adds a digit
        ([1, 8], [0], [1, 8]),                  # 81 + 0 = 81, different lengths
        ([0], [0], [0]),                        # both zero
    ]

    for first, second, expected in test_cases:
        l1 = build_linked_list(first)
        l2 = build_linked_list(second)
        result = add_two_numbers(l1, l2)

        # add_two_numbers only moves local pointers, so l1 and l2 still
        # point at their original heads here.
        print_linked_list(l1, "l1")
        print_linked_list(l2, "l2")
        print_linked_list(result, "sum")
        print("expected:", " -> ".join(str(d) for d in expected))
        print()


if __name__ == "__main__":
    main()
