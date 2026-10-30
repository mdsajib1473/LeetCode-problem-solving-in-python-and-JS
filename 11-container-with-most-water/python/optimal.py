def max_area(height):
    left = 0
    right = len(height) - 1
    best_area = 0

    while left < right:
        area = min(height[left], height[right]) * (right - left)
        best_area = max(best_area, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return best_area


if __name__ == "__main__":
    test_cases = [
        ([1, 8, 6, 2, 5, 4, 8, 3, 7], 49),
        ([1, 1], 1),
        ([4, 3, 2, 1, 4], 16),
        ([1, 2, 1], 2),
        ([0, 0], 0),
        ([2, 3, 4, 5, 18, 17, 6], 17),
        ([1, 2, 4, 3], 4),
        ([1, 1, 1, 1, 1], 4),
        ([5, 4, 3, 2, 1], 6),
        ([1, 3, 2, 5, 25, 24, 5], 24),
        ([10000, 10000], 10000),
    ]

    for input_heights, expected_output in test_cases:
        actual_output = max_area(input_heights)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f"Input: {input_heights}")
        print(f"Expected: {expected_output}")
        print(f"Output: {actual_output}")
        print(f"Result: {result}")
        print()
