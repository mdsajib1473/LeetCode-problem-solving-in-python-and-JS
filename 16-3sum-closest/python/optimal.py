import json


def three_sum_closest(nums, target):
    sorted_nums = sorted(nums)
    length = len(sorted_nums)
    best_sum = sorted_nums[0] + sorted_nums[1] + sorted_nums[2]

    for i in range(length - 2):
        if i > 0 and sorted_nums[i] == sorted_nums[i - 1]:
            continue

        left = i + 1
        right = length - 1

        while left < right:
            current_sum = sorted_nums[i] + sorted_nums[left] + sorted_nums[right]
            if current_sum == target:
                return current_sum
            if abs(current_sum - target) < abs(best_sum - target):
                best_sum = current_sum
            if current_sum < target:
                left += 1
            else:
                right -= 1

    return best_sum


if __name__ == "__main__":
    test_cases = [
        ([-1, 2, 1, -4], 1, 2),
        ([0, 0, 0], 1, 0),
        ([1, 1, 1, 0], -100, 2),
        ([1, 1, -1, -1, 3], -1, -1),
        ([4, 0, 5, -5, 3, 3, 0, -4, -5], -2, -2),
        ([10, 20, 30, 40], 100, 90),
        ([-3, -2, -5, 3, -4], -1, -2),
        ([1, 2, 5, 10, 11], 12, 13),
        ([0, 1, 2], 3, 3),
        ([-1, 0, 1, 1, 55], 3, 2),
        ([1, 1, 1, 1], 3, 3),
        ([-100, -98, -2, -1], -101, -101),
        ([1000, 1000, 1000], 10000, 3000),
        ([-1000, -1000, -1000], -10000, -3000),
    ]

    for input_value, target, expected_output in test_cases:
        actual_output = three_sum_closest(input_value, target)
        result = "PASS" if actual_output == expected_output else "FAIL"
        print(f"Input: {json.dumps(input_value)}")
        print(f"Target: {target}")
        print(f"Expected: {expected_output}")
        print(f"Output: {actual_output}")
        print(f"Result: {result}")
        print()
