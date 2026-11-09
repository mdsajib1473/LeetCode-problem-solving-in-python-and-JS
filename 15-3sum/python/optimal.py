import json


def three_sum(nums):
    sorted_nums = sorted(nums)
    length = len(sorted_nums)
    triplets = []

    for i in range(length - 2):
        if sorted_nums[i] > 0:
            break
        if i > 0 and sorted_nums[i] == sorted_nums[i - 1]:
            continue

        left = i + 1
        right = length - 1

        while left < right:
            total = sorted_nums[i] + sorted_nums[left] + sorted_nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                triplets.append([sorted_nums[i], sorted_nums[left], sorted_nums[right]])
                left += 1
                right -= 1
                while left < right and sorted_nums[left] == sorted_nums[left - 1]:
                    left += 1

    return triplets


def normalize(triplets):
    return sorted(sorted(triplet) for triplet in triplets)


if __name__ == "__main__":
    test_cases = [
        ([-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]),
        ([0, 1, 1], []),
        ([0, 0, 0], [[0, 0, 0]]),
        ([0, 0, 0, 0], [[0, 0, 0]]),
        ([-2, 0, 1, 1, 2], [[-2, 0, 2], [-2, 1, 1]]),
        ([1, 2, -2, -1], []),
        ([-1, 0, 1], [[-1, 0, 1]]),
        ([3, 0, -2, -1, 1, 2], [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]),
        (
            [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
            [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]],
        ),
        ([1, 1, 1], []),
        ([-5, -5, 10], [[-5, -5, 10]]),
        ([-1, -1, -1, 2, 2], [[-1, -1, 2]]),
        ([100000, -100000, 0], [[-100000, 0, 100000]]),
    ]

    for input_value, expected_output in test_cases:
        actual_output = three_sum(input_value)
        result = "PASS" if normalize(actual_output) == normalize(expected_output) else "FAIL"
        print(f"Input: {json.dumps(input_value)}")
        print(f"Expected: {json.dumps(expected_output)}")
        print(f"Output: {json.dumps(actual_output)}")
        print(f"Result: {result}")
        print()
