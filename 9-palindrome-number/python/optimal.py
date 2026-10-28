def is_palindrome(x):
    if x < 0 or (x % 10 == 0 and x != 0):
        return False

    reversed_half = 0
    while x > reversed_half:
        digit = x % 10
        reversed_half = reversed_half * 10 + digit
        x //= 10

    return x == reversed_half or x == reversed_half // 10


if __name__ == "__main__":
    test_cases = [
        (121, True),
        (-121, False),
        (10, False),
        (0, True),
        (1, True),
        (11, True),
        (12321, True),
        (123321, True),
        (1001, True),
        (100, False),
        (1000021, False),
        (-101, False),
        (2147447412, True),
        (2147483647, False),
        (-2147447412, False),
    ]

    for input_value, expected_output in test_cases:
        actual_output = is_palindrome(input_value)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f"Input: {input_value}")
        print(f"Expected: {expected_output}")
        print(f"Output: {actual_output}")
        print(f"Result: {result}")
        print()
