from typing import List


def find_median_sorted_arrays(nums1: List[int], nums2: List[int]) -> float:
    merged = sorted(nums1 + nums2)
    total_length = len(merged)
    middle_index = total_length // 2
    if total_length % 2 == 1:
        return float(merged[middle_index])
    return (merged[middle_index - 1] + merged[middle_index]) / 2.0


if __name__ == "__main__":
    test_cases = [
        ([1, 3], [2], 2.0),
        ([1, 2], [3, 4], 2.5),
        ([], [1], 1.0),
        ([2], [], 2.0),
        ([0, 0], [0, 0], 0.0),
        ([1, 3], [2, 7], 2.5),
        ([1, 2, 3, 4, 5], [6, 7, 8, 9, 10], 5.5),
        ([-5, -3], [-4], -4.0),
    ]

    for nums1, nums2, expected in test_cases:
        actual = find_median_sorted_arrays(nums1, nums2)
        result = "PASS" if actual == expected else "FAIL"
        print(f"nums1 = {nums1}, nums2 = {nums2}")
        print(f"Expected: {expected}, Actual: {actual}, Result: {result}")
        print()
