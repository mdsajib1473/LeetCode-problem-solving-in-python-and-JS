import json


def three_sum_closest(nums, target):
    length = len(nums)
    best_sum = nums[0] + nums[1] + nums[2]

    for i in range(length - 2):
        for j in range(i + 1, length - 1):
            for k in range(j + 1, length):
                current_sum = nums[i] + nums[j] + nums[k]
                if abs(current_sum - target) < abs(best_sum - target):
                    best_sum = current_sum

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
