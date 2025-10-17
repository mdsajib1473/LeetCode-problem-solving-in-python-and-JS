def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        need = target - num
        if need in seen:
            return [seen[need], i]  
        seen[num] = i

print(two_sum([2, 7, 11, 15], 9))  # -> [0, 1]
print(two_sum([3, 2, 4], 6))       # -> [1, 2]
print(two_sum([3, 3], 6))          # -> [0, 1]
