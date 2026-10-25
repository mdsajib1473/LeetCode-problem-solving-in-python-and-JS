def convert(s, numRows):
    if numRows == 1 or numRows >= len(s):
        return s

    column_count = len(s)
    grid = [[None] * column_count for _ in range(numRows)]

    row = 0
    column = 0
    moving_down = True
    for character in s:
        grid[row][column] = character
        if moving_down:
            if row == numRows - 1:
                moving_down = False
                row -= 1
                column += 1
            else:
                row += 1
        else:
            if row == 0:
                moving_down = True
                row += 1
            else:
                row -= 1
                column += 1

    result = []
    for grid_row in grid:
        for cell in grid_row:
            if cell is not None:
                result.append(cell)
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
