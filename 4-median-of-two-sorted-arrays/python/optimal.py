from typing import List


def find_median_sorted_arrays(nums1: List[int], nums2: List[int]) -> float:
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1

    shorter_length = len(nums1)
    longer_length = len(nums2)
    left_half_size = (shorter_length + longer_length + 1) // 2
    low = 0
    high = shorter_length

    while low <= high:
        partition_a = (low + high) // 2
        partition_b = left_half_size - partition_a

        max_left_a = nums1[partition_a - 1] if partition_a > 0 else float("-inf")
        min_right_a = nums1[partition_a] if partition_a < shorter_length else float("inf")
        max_left_b = nums2[partition_b - 1] if partition_b > 0 else float("-inf")
        min_right_b = nums2[partition_b] if partition_b < longer_length else float("inf")

        if max_left_a <= min_right_b and max_left_b <= min_right_a:
            if (shorter_length + longer_length) % 2 == 1:
                return float(max(max_left_a, max_left_b))
            return (max(max_left_a, max_left_b) + min(min_right_a, min_right_b)) / 2.0

        if max_left_a > min_right_b:
            high = partition_a - 1
        else:
            low = partition_a + 1

    raise ValueError("Input arrays must be sorted")


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
