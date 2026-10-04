class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def build_linked_list(values):
    dummy = ListNode()       
    tail = dummy
    for value in values:
        tail.next = ListNode(value)
        tail = tail.next
    return dummy.next


def linked_list_to_string(head):
    parts = []
    node = head
    while node is not None:
        parts.append(str(node.val))
        node = node.next
    return " -> ".join(parts) if parts else "(empty)"


def print_linked_list(head, label=""):
    prefix = label + ": " if label else ""
    print(prefix + linked_list_to_string(head))


def linked_list_to_int(head):
    number = 0
    place = 1
    node = head
    while node is not None:
        number += node.val * place
        place *= 10
        node = node.next
    return number


def int_to_linked_list(number):
    dummy = ListNode()
    tail = dummy
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
        ([9, 9, 9], [1], [0, 0, 0, 1]),         # 999 + 1 = 1000
        ([1, 8], [0], [1, 8]),                  # 81 + 0 = 81
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
