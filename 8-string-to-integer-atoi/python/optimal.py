INT_MAX = 2**31 - 1
INT_MIN = -(2**31)
MAX_BEFORE_PUSH = INT_MAX // 10
MAX_LAST_DIGIT = 7


def myAtoi(s):
    index = 0
    length = len(s)

    while index < length and s[index] == " ":
        index += 1

    sign = 1
    if index < length and (s[index] == "+" or s[index] == "-"):
        if s[index] == "-":
            sign = -1
        index += 1

    result = 0
    while index < length and "0" <= s[index] <= "9":
        digit = ord(s[index]) - ord("0")
        if result > MAX_BEFORE_PUSH or (result == MAX_BEFORE_PUSH and digit > MAX_LAST_DIGIT):
            return INT_MAX if sign == 1 else INT_MIN
        result = result * 10 + digit
        index += 1

    return sign * result


if __name__ == "__main__":
    test_cases = [
        ("42", 42),
        ("   -042", -42),
        ("1337c0d3", 1337),
        ("0-1", 0),
        ("words and 987", 0),
        ("", 0),
        ("   ", 0),
        ("+1", 1),
        ("+-12", 0),
        ("-91283472332", -2147483648),
        ("91283472332", 2147483647),
        ("2147483647", 2147483647),
        ("-2147483648", -2147483648),
        ("2147483648", 2147483647),
        ("3.14159", 3),
        (".1", 0),
        ("  +0 123", 0),
        ("00000-42a1234", 0),
    ]

    for input_string, expected_output in test_cases:
        actual_output = myAtoi(input_string)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f'Input: "{input_string}"')
        print(f"Expected: {expected_output}")
        print(f"Output: {actual_output}")
        print(f"Result: {result}")
        print()
