def four_sum(nums, target):
    n = len(nums)
    if n < 4:
        return []
    sorted_nums = sorted(nums)
    quadruplets = []
    for i in range(n - 3):
        if i > 0 and sorted_nums[i] == sorted_nums[i - 1]:
            continue
        for j in range(i + 1, n - 2):
            if j > i + 1 and sorted_nums[j] == sorted_nums[j - 1]:
                continue
            left = j + 1
            right = n - 1
            while left < right:
                current_sum = sorted_nums[i] + sorted_nums[j] + sorted_nums[left] + sorted_nums[right]
                if current_sum < target:
                    left += 1
                elif current_sum > target:
                    right -= 1
                else:
                    quadruplets.append([sorted_nums[i], sorted_nums[j], sorted_nums[left], sorted_nums[right]])
                    left += 1
                    right -= 1
                    while left < right and sorted_nums[left] == sorted_nums[left - 1]:
                        left += 1
    return quadruplets


def normalize(quadruplets):
    return sorted(sorted(quadruplet) for quadruplet in quadruplets)


def run_tests():
    test_cases = [
        ([1, 0, -1, 0, -2, 2], 0, [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]),
        ([2, 2, 2, 2, 2], 8, [[2, 2, 2, 2]]),
        ([0, 0, 0, 0], 0, [[0, 0, 0, 0]]),
        ([1, 2, 3], 6, []),
        ([1], 1, []),
        ([0, 0, 0, 0, 0], 0, [[0, 0, 0, 0]]),
        ([-3, -1, 0, 2, 4, 5], 2, [[-3, -1, 2, 4]]),
        ([1, 1, 1, 1, 1, 1], 4, [[1, 1, 1, 1]]),
        ([-2, -1, -1, 1, 1, 2, 2], 0, [[-2, -1, 1, 2], [-1, -1, 1, 1]]),
        ([1000000000, 1000000000, 1000000000, 1000000000], -294967296, []),
        (
            [1000000000, 1000000000, 1000000000, 1000000000],
            4000000000,
            [[1000000000, 1000000000, 1000000000, 1000000000]],
        ),
        (
            [-1000000000, -1000000000, -1000000000, -1000000000],
            -4000000000,
            [[-1000000000, -1000000000, -1000000000, -1000000000]],
        ),
        ([4, 3, 2, 1], 10, [[1, 2, 3, 4]]),
    ]

    passed_count = 0
    for nums, target, expected in test_cases:
        actual = four_sum(list(nums), target)
        normalized_expected = normalize(expected)
        normalized_actual = normalize(actual)
        passed = normalized_expected == normalized_actual
        passed_count += passed
        print(f"Input:    nums = {nums}, target = {target}")
        print(f"Expected: {normalized_expected}")
        print(f"Actual:   {normalized_actual}")
        print(f"Result:   {'PASS' if passed else 'FAIL'}")
        print()

    print(f"Passed {passed_count} of {len(test_cases)} tests")


if __name__ == "__main__":
    run_tests()
