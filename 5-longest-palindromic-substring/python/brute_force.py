def is_palindrome(text):
    left = 0
    right = len(text) - 1
    while left < right:
        if text[left] != text[right]:
            return False
        left += 1
        right -= 1
    return True


def longest_palindrome(s):
    longest = ""
    for start in range(len(s)):
        for end in range(start + 1, len(s) + 1):
            substring = s[start:end]
            if len(substring) > len(longest) and is_palindrome(substring):
                longest = substring
    return longest


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
