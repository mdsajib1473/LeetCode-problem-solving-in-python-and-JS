function threeSumClosest(nums, target) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const length = sortedNums.length;
  let bestSum = sortedNums[0] + sortedNums[1] + sortedNums[2];

  for (let i = 0; i < length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      const currentSum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (currentSum === target) {
        return currentSum;
      }
      if (Math.abs(currentSum - target) < Math.abs(bestSum - target)) {
        bestSum = currentSum;
      }
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return bestSum;
}

const testCases = [
  [[-1, 2, 1, -4], 1, 2],
  [[0, 0, 0], 1, 0],
  [[1, 1, 1, 0], -100, 2],
  [[1, 1, -1, -1, 3], -1, -1],
  [[4, 0, 5, -5, 3, 3, 0, -4, -5], -2, -2],
  [[10, 20, 30, 40], 100, 90],
  [[-3, -2, -5, 3, -4], -1, -2],
  [[1, 2, 5, 10, 11], 12, 13],
  [[0, 1, 2], 3, 3],
  [[-1, 0, 1, 1, 55], 3, 2],
  [[1, 1, 1, 1], 3, 3],
  [[-100, -98, -2, -1], -101, -101],
  [[1000, 1000, 1000], 10000, 3000],
  [[-1000, -1000, -1000], -10000, -3000],
];

for (const [inputValue, target, expectedOutput] of testCases) {
  const actualOutput = threeSumClosest(inputValue, target);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: ${JSON.stringify(inputValue)}`);
  console.log(`Target: ${target}`);
  console.log(`Expected: ${expectedOutput}`);
  console.log(`Output: ${actualOutput}`);
  console.log(`Result: ${result}`);
  console.log();
}
