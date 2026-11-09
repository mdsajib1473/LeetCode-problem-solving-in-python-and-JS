function threeSum(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const length = sortedNums.length;
  const triplets = [];

  for (let i = 0; i < length - 2; i++) {
    if (sortedNums[i] > 0) {
      break;
    }
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      const total = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (total < 0) {
        left++;
      } else if (total > 0) {
        right--;
      } else {
        triplets.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;
        while (left < right && sortedNums[left] === sortedNums[left - 1]) {
          left++;
        }
      }
    }
  }

  return triplets;
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
