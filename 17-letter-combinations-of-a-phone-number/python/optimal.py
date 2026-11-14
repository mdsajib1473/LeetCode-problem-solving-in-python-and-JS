DIGIT_TO_LETTERS = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
}


def letter_combinations(digits):
    if not digits:
        return []
    combinations = []

    def backtrack(index, path):
        if index == len(digits):
            combinations.append("".join(path))
            return
        for letter in DIGIT_TO_LETTERS[digits[index]]:
            path.append(letter)
            backtrack(index + 1, path)
            path.pop()

    backtrack(0, [])
    return combinations


def check_exact(actual, expected):
    return sorted(actual) == sorted(expected)


def check_length_and_bounds(actual, expected_length, first_entry, last_entry):
    sorted_actual = sorted(actual)
    return (
        len(sorted_actual) == expected_length
        and sorted_actual[0] == first_entry
        and sorted_actual[-1] == last_entry
    )


def check_length_and_unique(actual, expected_length):
    return len(actual) == expected_length and len(set(actual)) == expected_length


def run_tests():
    exact_cases = [
        ("23", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]),
        ("", []),
        ("2", ["a", "b", "c"]),
        ("7", ["p", "q", "r", "s"]),
        ("9", ["w", "x", "y", "z"]),
        ("79", ["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"]),
        ("22", ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"]),
        ("89", ["tw", "tx", "ty", "tz", "uw", "ux", "uy", "uz", "vw", "vx", "vy", "vz"]),
    ]
    bounds_cases = [
        ("234", 27, "adg", "cfi"),
        ("2345", 81, "adgj", "cfil"),
    ]
    unique_cases = [
        ("7777", 256),
    ]

    passed_count = 0
    total_count = 0

    for digits, expected in exact_cases:
        actual = letter_combinations(digits)
        passed = check_exact(actual, expected)
        total_count += 1
        passed_count += passed
        print(f'Input: "{digits}"')
        print(f"Expected: {sorted(expected)}")
        print(f"Actual:   {sorted(actual)}")
        print(f"Result:   {'PASS' if passed else 'FAIL'}")
        print()

    for digits, expected_length, first_entry, last_entry in bounds_cases:
        actual = letter_combinations(digits)
        sorted_actual = sorted(actual)
        passed = check_length_and_bounds(actual, expected_length, first_entry, last_entry)
        total_count += 1
        passed_count += passed
        actual_first = sorted_actual[0] if sorted_actual else None
        actual_last = sorted_actual[-1] if sorted_actual else None
        print(f'Input: "{digits}"')
        print(f'Expected: length {expected_length}, first "{first_entry}", last "{last_entry}"')
        print(f'Actual:   length {len(actual)}, first "{actual_first}", last "{actual_last}"')
        print(f"Result:   {'PASS' if passed else 'FAIL'}")
        print()

    for digits, expected_length in unique_cases:
        actual = letter_combinations(digits)
        passed = check_length_and_unique(actual, expected_length)
        total_count += 1
        passed_count += passed
        print(f'Input: "{digits}"')
        print(f"Expected: length {expected_length}, all unique")
        print(f"Actual:   length {len(actual)}, unique count {len(set(actual))}")
        print(f"Result:   {'PASS' if passed else 'FAIL'}")
        print()

    print(f"Passed {passed_count} of {total_count} tests")


if __name__ == "__main__":
    run_tests()
