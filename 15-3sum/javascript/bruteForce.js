function threeSum(nums) {
  const length = nums.length;
  const seenTriplets = new Set();

  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          seenTriplets.add(triplet.join(","));
        }
      }
    }
  }

  return [...seenTriplets].map((key) => key.split(",").map(Number));
}

function compareTriplets(first, second) {
  for (let index = 0; index < 3; index++) {
    if (first[index] !== second[index]) {
      return first[index] - second[index];
    }
  }
  return 0;
}

function normalize(triplets) {
  return triplets
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort(compareTriplets);
}

const testCases = [
  [[-1, 0, 1, 2, -1, -4], [[-1, -1, 2], [-1, 0, 1]]],
  [[0, 1, 1], []],
  [[0, 0, 0], [[0, 0, 0]]],
  [[0, 0, 0, 0], [[0, 0, 0]]],
  [[-2, 0, 1, 1, 2], [[-2, 0, 2], [-2, 1, 1]]],
  [[1, 2, -2, -1], []],
  [[-1, 0, 1], [[-1, 0, 1]]],
  [[3, 0, -2, -1, 1, 2], [[-2, -1, 3], [-2, 0, 2], [-1, 0, 1]]],
  [
    [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6],
    [[-4, -2, 6], [-4, 0, 4], [-4, 1, 3], [-4, 2, 2], [-2, -2, 4], [-2, 0, 2]],
  ],
  [[1, 1, 1], []],
  [[-5, -5, 10], [[-5, -5, 10]]],
  [[-1, -1, -1, 2, 2], [[-1, -1, 2]]],
  [[100000, -100000, 0], [[-100000, 0, 100000]]],
];

for (const [inputValue, expectedOutput] of testCases) {
  const actualOutput = threeSum(inputValue);
  const isMatch =
    JSON.stringify(normalize(actualOutput)) === JSON.stringify(normalize(expectedOutput));
  const result = isMatch ? "PASS" : "FAIL";
  console.log(`Input: ${JSON.stringify(inputValue)}`);
  console.log(`Expected: ${JSON.stringify(expectedOutput)}`);
  console.log(`Output: ${JSON.stringify(actualOutput)}`);
  console.log(`Result: ${result}`);
  console.log();
}
