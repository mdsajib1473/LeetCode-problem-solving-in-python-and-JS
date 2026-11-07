import json


def longest_common_prefix(strs):
    prefix = strs[0]

    for current in strs[1:]:
        while not current.startswith(prefix):
            prefix = prefix[:-1]
            if prefix == "":
                return ""

    return prefix


if __name__ == "__main__":
    test_cases = [
        (["flower", "flow", "flight"], "fl"),
        (["dog", "racecar", "car"], ""),
        (["a"], "a"),
        (["", "b"], ""),
        (["ab", "a"], "a"),
        (["flower", "flower", "flower"], "flower"),
        (["interview", "internet", "interval", "internal"], "inter"),
        (["abc", "abcd", "ab"], "ab"),
        (["c", "acc", "ccc"], ""),
        (["prefix", "pre", "prefab"], "pre"),
        (["", "", ""], ""),
        (["reflower", "flow", "flight"], ""),
        (["aaa", "aa", "aaa"], "aa"),
        (["x", "x"], "x"),
    ]

    for input_value, expected_output in test_cases:
        actual_output = longest_common_prefix(input_value)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f"Input: {json.dumps(input_value)}")
        print(f'Expected: "{expected_output}"')
        print(f'Output: "{actual_output}"')
        print(f"Result: {result}")
        print()
