SUBTRACTIVE_PAIRS = {
    "IV": 4,
    "IX": 9,
    "XL": 40,
    "XC": 90,
    "CD": 400,
    "CM": 900,
}

SINGLE_SYMBOLS = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}


def roman_to_int(s):
    total = 0
    index = 0

    while index < len(s):
        pair = s[index:index + 2]
        if pair in SUBTRACTIVE_PAIRS:
            total += SUBTRACTIVE_PAIRS[pair]
            index += 2
        else:
            total += SINGLE_SYMBOLS[s[index]]
            index += 1

    return total


if __name__ == "__main__":
    test_cases = [
        ("III", 3),
        ("LVIII", 58),
        ("MCMXCIV", 1994),
        ("IV", 4),
        ("IX", 9),
        ("XL", 40),
        ("XC", 90),
        ("CD", 400),
        ("CM", 900),
        ("I", 1),
        ("MMMCMXCIX", 3999),
        ("MMMDCCXLIX", 3749),
        ("CDXLIV", 444),
        ("MMXXIV", 2024),
        ("M", 1000),
        ("XLIX", 49),
    ]

    for input_value, expected_output in test_cases:
        actual_output = roman_to_int(input_value)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f'Input: "{input_value}"')
        print(f"Expected: {expected_output}")
        print(f"Output: {actual_output}")
        print(f"Result: {result}")
        print()
