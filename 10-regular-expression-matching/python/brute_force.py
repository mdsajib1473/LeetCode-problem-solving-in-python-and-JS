def is_match(s, p):
    def matches_from(string_index, pattern_index):
        if pattern_index == len(p):
            return string_index == len(s)

        first_characters_match = string_index < len(s) and p[pattern_index] in (".", s[string_index])

        if pattern_index + 1 < len(p) and p[pattern_index + 1] == "*":
            skip_star_group = matches_from(string_index, pattern_index + 2)
            absorb_one_character = first_characters_match and matches_from(string_index + 1, pattern_index)
            return skip_star_group or absorb_one_character

        return first_characters_match and matches_from(string_index + 1, pattern_index + 1)

    return matches_from(0, 0)


if __name__ == "__main__":
    test_cases = [
        ("aa", "a", False),
        ("aa", "a*", True),
        ("ab", ".*", True),
        ("aab", "c*a*b", True),
        ("mississippi", "mis*is*p*.", False),
        ("mississippi", "mis*is*ip*.", True),
        ("a", ".*", True),
        ("aaa", "a*a", True),
        ("aaa", "ab*a*c*a", True),
        ("ab", ".*c", False),
        ("abcd", "d*", False),
        ("a", "ab*", True),
        ("bbbba", ".*a*a", True),
        ("aaa", "aaaa", False),
        ("a", "a*a*a*a*b", False),
        ("abc", "a.c", True),
    ]

    for input_string, pattern, expected_output in test_cases:
        actual_output = is_match(input_string, pattern)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f'Input: s = "{input_string}", p = "{pattern}"')
        print(f"Expected: {expected_output}")
        print(f"Output: {actual_output}")
        print(f"Result: {result}")
        print()
