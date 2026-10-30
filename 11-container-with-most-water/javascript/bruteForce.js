function maxArea(height) {
  let bestArea = 0;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const area = Math.min(height[left], height[right]) * (right - left);
      bestArea = Math.max(bestArea, area);
    }
  }
  return bestArea;
}

const testCases = [
  [[1, 8, 6, 2, 5, 4, 8, 3, 7], 49],
  [[1, 1], 1],
  [[4, 3, 2, 1, 4], 16],
  [[1, 2, 1], 2],
  [[0, 0], 0],
  [[2, 3, 4, 5, 18, 17, 6], 17],
  [[1, 2, 4, 3], 4],
  [[1, 1, 1, 1, 1], 4],
  [[5, 4, 3, 2, 1], 6],
  [[1, 3, 2, 5, 25, 24, 5], 24],
  [[10000, 10000], 10000],
];

for (const [inputHeights, expectedOutput] of testCases) {
  const actualOutput = maxArea(inputHeights);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: ${JSON.stringify(inputHeights)}`);
  console.log(`Expected: ${expectedOutput}`);
  console.log(`Output: ${actualOutput}`);
  console.log(`Result: ${result}`);
  console.log();
}
