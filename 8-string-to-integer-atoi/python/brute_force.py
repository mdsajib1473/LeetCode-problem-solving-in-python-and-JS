INT_MAX = 2**31 - 1
INT_MIN = -(2**31)


def is_digit_character(character):
    return "0" <= character <= "9"


def myAtoi(s):
    first_non_space = 0
    while first_non_space < len(s) and s[first_non_space] == " ":
        first_non_space += 1
    remaining = s[first_non_space:]

    sign = 1
    if remaining and remaining[0] in "+-":
        if remaining[0] == "-":
            sign = -1
        remaining = remaining[1:]

    digit_string = ""
    for character in remaining:
        if not is_digit_character(character):
            break
        digit_string += character

    if digit_string == "":
        return 0

    value = sign * int(digit_string)
    return max(INT_MIN, min(INT_MAX, value))


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
