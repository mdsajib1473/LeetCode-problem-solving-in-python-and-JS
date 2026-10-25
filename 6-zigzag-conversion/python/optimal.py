def convert(s, numRows):
    if numRows == 1 or numRows >= len(s):
        return s

    cycle_length = 2 * (numRows - 1)
    string_length = len(s)
    result = []

    for row in range(numRows):
        for cycle_start in range(0, string_length, cycle_length):
            vertical_index = cycle_start + row
            if vertical_index < string_length:
                result.append(s[vertical_index])
            if 0 < row < numRows - 1:
                diagonal_index = cycle_start + cycle_length - row
                if diagonal_index < string_length:
                    result.append(s[diagonal_index])

    return "".join(result)


if __name__ == "__main__":
    test_cases = [
        ("PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"),
        ("PAYPALISHIRING", 4, "PINALSIGYAHRPI"),
        ("PAYPALISHIRING", 2, "PYAIHRNAPLSIIG"),
        ("A", 1, "A"),
        ("AB", 1, "AB"),
        ("ABCD", 2, "ACBD"),
        ("ABC", 5, "ABC"),
        ("AB.,", 3, "AB,."),
    ]

    for input_string, row_count, expected_output in test_cases:
        actual_output = convert(input_string, row_count)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f"Input: s = {input_string!r}, numRows = {row_count}")
        print(f"Expected: {expected_output!r}")
        print(f"Output: {actual_output!r}")
        print(f"Result: {result}")
        print()
