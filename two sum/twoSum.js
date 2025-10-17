function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const need = target - num;
        if (seen.has(need)) {
            return [seen.get(need), i];
        }
        seen.set(num, i);
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));        
