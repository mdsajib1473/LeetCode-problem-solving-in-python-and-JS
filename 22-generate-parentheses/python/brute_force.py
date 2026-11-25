def is_well_formed(candidate):
    balance = 0
    for character in candidate:
        if character == "(":
            balance += 1
        else:
            balance -= 1
        if balance < 0:
            return False
    return balance == 0


def generate_parenthesis(n):
    valid_combinations = []
    target_length = 2 * n

    def build_candidates(candidate):
        if len(candidate) == target_length:
            if is_well_formed(candidate):
                valid_combinations.append(candidate)
            return
        build_candidates(candidate + "(")
        build_candidates(candidate + ")")

    build_candidates("")
    return valid_combinations


def run_tests():
    test_cases = [
        {"n": 1, "expected": ["()"]},
        {"n": 2, "expected": ["(())", "()()"]},
        {"n": 3, "expected": ["((()))", "(()())", "(())()", "()(())", "()()()"]},
        {
            "n": 4,
            "expected": [
                "(((())))", "((()()))", "((())())", "((()))()", "(()(()))",
                "(()()())", "(()())()", "(())(())", "(())()()", "()((()))",
                "()(()())", "()(())()", "()()(())", "()()()()",
            ],
        },
        {"n": 5, "count": 42, "first": "((((()))))", "last": "()()()()()"},
        {"n": 6, "count": 132, "first": "(((((())))))", "last": "()()()()()()"},
        {"n": 7, "count": 429},
        {"n": 8, "count": 1430, "first": "(((((((())))))))", "last": "()()()()()()()()"},
    ]

    passed_count = 0
    for case in test_cases:
        n = case["n"]
        actual = generate_parenthesis(n)
        sorted_actual = sorted(actual)
        all_well_formed = all(
            len(combination) == 2 * n and is_well_formed(combination) for combination in actual
        )
        print(f"Input:    n = {n}")

        if "expected" in case:
            sorted_expected = sorted(case["expected"])
            passed = sorted_actual == sorted_expected and all_well_formed
            print(f"Expected: {sorted_expected}")
            print(f"Actual:   {sorted_actual}")
        else:
            expected_count = case["count"]
            all_unique = len(set(actual)) == len(actual)
            actual_first = sorted_actual[0] if sorted_actual else None
            actual_last = sorted_actual[-1] if sorted_actual else None
            passed = len(actual) == expected_count and all_unique and all_well_formed
            expected_description = f"length {expected_count}, all unique, all well formed"
            actual_description = (
                f"length {len(actual)}, all unique {all_unique}, all well formed {all_well_formed}"
            )
            if "first" in case:
                passed = passed and actual_first == case["first"] and actual_last == case["last"]
                expected_description += f', first "{case["first"]}", last "{case["last"]}"'
                actual_description += f', first "{actual_first}", last "{actual_last}"'
            print(f"Expected: {expected_description}")
            print(f"Actual:   {actual_description}")

        passed_count += passed
        print(f"Result:   {'PASS' if passed else 'FAIL'}")
        print()

    print(f"Passed {passed_count} of {len(test_cases)} tests")


if __name__ == "__main__":
    run_tests()
