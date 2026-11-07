import json


def longest_common_prefix(strs):
    first = strs[0]

    for index, character in enumerate(first):
        for other in strs[1:]:
            if len(other) == index or other[index] != character:
                return first[:index]

    return first


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
