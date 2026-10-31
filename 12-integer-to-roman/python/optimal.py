VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
SYMBOLS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]


def int_to_roman(num):
    remaining = num
    result = []

    for value, symbol in zip(VALUES, SYMBOLS):
        if remaining == 0:
            break
        while remaining >= value:
            result.append(symbol)
            remaining -= value

    return "".join(result)


if __name__ == "__main__":
    test_cases = [
        (3, "III"),
        (4, "IV"),
        (9, "IX"),
        (58, "LVIII"),
        (1994, "MCMXCIV"),
        (3749, "MMMDCCXLIX"),
        (1, "I"),
        (3999, "MMMCMXCIX"),
        (40, "XL"),
        (90, "XC"),
        (400, "CD"),
        (900, "CM"),
        (444, "CDXLIV"),
        (2024, "MMXXIV"),
        (1000, "M"),
        (49, "XLIX"),
    ]

    for input_value, expected_output in test_cases:
        actual_output = int_to_roman(input_value)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f"Input: {input_value}")
        print(f'Expected: "{expected_output}"')
        print(f'Output: "{actual_output}"')
        print(f"Result: {result}")
        print()
