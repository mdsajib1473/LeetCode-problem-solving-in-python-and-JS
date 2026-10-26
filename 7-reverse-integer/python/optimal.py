INT_MAX = 2**31 - 1
MAX_BEFORE_PUSH = INT_MAX // 10
MAX_LAST_DIGIT_POSITIVE = 7
MAX_LAST_DIGIT_NEGATIVE = 8


def reverse(x):
    is_negative = x < 0
    remaining = abs(x)
    max_last_digit = MAX_LAST_DIGIT_NEGATIVE if is_negative else MAX_LAST_DIGIT_POSITIVE
    result = 0

    while remaining != 0:
        remaining, digit = divmod(remaining, 10)
        if result > MAX_BEFORE_PUSH or (result == MAX_BEFORE_PUSH and digit > max_last_digit):
            return 0
        result = result * 10 + digit

    return -result if is_negative else result


if __name__ == "__main__":
    test_cases = [
        (123, 321),
        (-123, -321),
        (120, 21),
        (0, 0),
        (10, 1),
        (-10, -1),
        (901000, 109),
        (1534236469, 0),
        (2147483647, 0),
        (-2147483648, 0),
        (1463847412, 2147483641),
        (-1563847412, 0),
    ]

    for input_value, expected_output in test_cases:
        actual_output = reverse(input_value)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f"Input: {input_value}")
        print(f"Expected: {expected_output}")
        print(f"Output: {actual_output}")
        print(f"Result: {result}")
        print()
