def expand_around_center(s, left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1
    return left + 1, right - 1


def longest_palindrome(s):
    best_start = 0
    best_length = 0
    for center in range(len(s)):
        for left, right in ((center, center), (center, center + 1)):
            start, end = expand_around_center(s, left, right)
            length = end - start + 1
            if length > best_length:
                best_start = start
                best_length = length
    return s[best_start:best_start + best_length]


if __name__ == "__main__":
    test_cases = [
        ("babad", ["bab", "aba"]),
        ("cbbd", ["bb"]),
        ("a", ["a"]),
        ("ac", ["a", "c"]),
        ("racecar", ["racecar"]),
        ("forgeeksskeegfor", ["geeksskeeg"]),
        ("abacdfgdcaba", ["aba"]),
        ("bb", ["bb"]),
        ("abcda", ["a", "b", "c", "d"]),
    ]

    for input_string, accepted_answers in test_cases:
        actual_output = longest_palindrome(input_string)
        result = "PASS" if actual_output in accepted_answers else "FAIL"
        print(f"Input: {input_string!r}")
        print(f"Accepted: {accepted_answers}")
        print(f"Output: {actual_output!r}")
        print(f"Result: {result}")
        print()
