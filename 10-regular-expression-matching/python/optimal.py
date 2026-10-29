def is_match(s, p):
    string_length = len(s)
    pattern_length = len(p)
    table = [[False] * (pattern_length + 1) for _ in range(string_length + 1)]
    table[0][0] = True

    for j in range(2, pattern_length + 1):
        if p[j - 1] == "*":
            table[0][j] = table[0][j - 2]

    for i in range(1, string_length + 1):
        for j in range(1, pattern_length + 1):
            if p[j - 1] == "*":
                matches_zero = j >= 2 and table[i][j - 2]
                absorbs_one_more = j >= 2 and p[j - 2] in (".", s[i - 1]) and table[i - 1][j]
                table[i][j] = matches_zero or absorbs_one_more
            else:
                table[i][j] = p[j - 1] in (".", s[i - 1]) and table[i - 1][j - 1]

    return table[string_length][pattern_length]


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
