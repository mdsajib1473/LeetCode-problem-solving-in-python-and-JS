"""
LeetCode 2: Add Two Numbers  (brute force approach)

Idea:
    1. Walk each linked list and rebuild the integer it stands for. Digits are
       stored in reverse order, so the node at index i carries place value 10**i.
    2. Add the two integers with ordinary arithmetic.
    3. Convert the sum back into a linked list, again in reverse digit order.

Time complexity:  O(n + m)
    n and m are the lengths of the two lists. Reading both lists is O(n + m),
    and emitting the result costs O(max(n, m) + 1) nodes.
Space complexity: O(max(n, m))
    for the nodes of the answer list. The intermediate integers hold
    O(n + m) digits as well.

Caveat: this only works cleanly because Python integers are arbitrary
precision. In a fixed width integer language a long list would overflow,
which is exactly why the optimal digit by digit method is preferred.
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


def linked_list_to_int(head):
    """Read the list back to front, so digit i contributes digit * 10**i."""
    number = 0
    place = 1
    node = head
    while node is not None:
        number += node.val * place
        place *= 10
        node = node.next
    return number


def int_to_linked_list(number):
    """Split an integer into digits, least significant digit first."""
    dummy = ListNode()
    tail = dummy
    # A do while style loop so the value 0 still produces a single node.
    while True:
        tail.next = ListNode(number % 10)
        tail = tail.next
        number //= 10
        if number == 0:
            break
    return dummy.next


def add_two_numbers(l1, l2):
    """Brute force: list -> int, add, int -> list."""
    total = linked_list_to_int(l1) + linked_list_to_int(l2)
    return int_to_linked_list(total)


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

        print_linked_list(l1, "l1")
        print_linked_list(l2, "l2")
        print_linked_list(result, "sum")
        print("expected:", " -> ".join(str(d) for d in expected))
        print()


if __name__ == "__main__":
    main()
