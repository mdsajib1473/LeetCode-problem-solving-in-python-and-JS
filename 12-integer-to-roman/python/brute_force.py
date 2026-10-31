BASIC_SYMBOLS = [
    (1000, "M"),
    (500, "D"),
    (100, "C"),
    (50, "L"),
    (10, "X"),
    (5, "V"),
    (1, "I"),
]

SUBTRACTIVE_REPLACEMENTS = [
    ("DCCCC", "CM"),
    ("CCCC", "CD"),
    ("LXXXX", "XC"),
    ("XXXX", "XL"),
    ("VIIII", "IX"),
    ("IIII", "IV"),
]


def int_to_roman(num):
    remaining = num
    numeral = ""
    for value, symbol in BASIC_SYMBOLS:
        repeat_count = remaining // value
        numeral += symbol * repeat_count
        remaining -= repeat_count * value

    for long_form, subtractive_form in SUBTRACTIVE_REPLACEMENTS:
        numeral = numeral.replace(long_form, subtractive_form)

    return numeral


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
