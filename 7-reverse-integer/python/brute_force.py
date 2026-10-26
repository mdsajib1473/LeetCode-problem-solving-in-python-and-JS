INT_MAX = 2**31 - 1
INT_MIN = -(2**31)


def reverse(x):
    sign = -1 if x < 0 else 1
    reversed_digits = str(abs(x))[::-1]
    reversed_value = sign * int(reversed_digits)
    if reversed_value < INT_MIN or reversed_value > INT_MAX:
        return 0
    return reversed_value


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
