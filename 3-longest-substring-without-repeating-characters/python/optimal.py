def length_of_longest_substring(s):
    """Return the length of the longest substring of s with no repeats."""
    last_seen = {}     
    best = 0

    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = max(left, last_seen[ch] + 1)

        last_seen[ch] = right

        best = max(best, right - left + 1)

    return best


def main():
    test_cases = [
        ("abcabcbb", 3),    # "abc"
        ("bbbbb", 1),       # "b"
        ("pwwkew", 3),      # "wke"
        ("", 0),            # empty string has no substring
        ("dvdf", 3),        # "vdf", the window has to start after the first d
        ("abba", 2),        # "ab" or "ba", the tricky left pointer case
    ]

    all_passed = True

    for s, expected in test_cases:
        actual = length_of_longest_substring(s)
        passed = actual == expected
        all_passed = all_passed and passed

        print("input:    " + repr(s))
        print("expected: " + str(expected))
        print("actual:   " + str(actual))
        print("result:   " + ("PASS" if passed else "FAIL"))
        print()

    print("all tests passed" if all_passed else "some tests failed")


if __name__ == "__main__":
    main()
