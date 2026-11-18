function fourSum(nums, target) {
  const n = nums.length;
  if (n < 4) {
    return [];
  }
  const seenQuadruplets = new Set();
  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            const quadruplet = [nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b);
            seenQuadruplets.add(quadruplet.join(","));
          }
        }
      }
    }
  }
  return [...seenQuadruplets].map((key) => key.split(",").map(Number));
}

function compareQuadruplets(first, second) {
  for (let index = 0; index < first.length; index++) {
    if (first[index] !== second[index]) {
      return first[index] - second[index];
    }
  }
  return 0;
}

function normalize(quadruplets) {
  return quadruplets
    .map((quadruplet) => [...quadruplet].sort((a, b) => a - b))
    .sort(compareQuadruplets);
}

function runTests() {
  const testCases = [
    [[1, 0, -1, 0, -2, 2], 0, [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]],
    [[2, 2, 2, 2, 2], 8, [[2, 2, 2, 2]]],
    [[0, 0, 0, 0], 0, [[0, 0, 0, 0]]],
    [[1, 2, 3], 6, []],
    [[1], 1, []],
    [[0, 0, 0, 0, 0], 0, [[0, 0, 0, 0]]],
    [[-3, -1, 0, 2, 4, 5], 2, [[-3, -1, 2, 4]]],
    [[1, 1, 1, 1, 1, 1], 4, [[1, 1, 1, 1]]],
    [[-2, -1, -1, 1, 1, 2, 2], 0, [[-2, -1, 1, 2], [-1, -1, 1, 1]]],
    [[1000000000, 1000000000, 1000000000, 1000000000], -294967296, []],
    [
      [1000000000, 1000000000, 1000000000, 1000000000],
      4000000000,
      [[1000000000, 1000000000, 1000000000, 1000000000]],
    ],
    [
      [-1000000000, -1000000000, -1000000000, -1000000000],
      -4000000000,
      [[-1000000000, -1000000000, -1000000000, -1000000000]],
    ],
    [[4, 3, 2, 1], 10, [[1, 2, 3, 4]]],
  ];

  let passedCount = 0;
  for (const [nums, target, expected] of testCases) {
    const actual = fourSum([...nums], target);
    const normalizedExpected = normalize(expected);
    const normalizedActual = normalize(actual);
    const passed = JSON.stringify(normalizedExpected) === JSON.stringify(normalizedActual);
    if (passed) passedCount += 1;
    console.log(`Input:    nums = ${JSON.stringify(nums)}, target = ${target}`);
    console.log(`Expected: ${JSON.stringify(normalizedExpected)}`);
    console.log(`Actual:   ${JSON.stringify(normalizedActual)}`);
    console.log(`Result:   ${passed ? "PASS" : "FAIL"}`);
    console.log();
  }

  console.log(`Passed ${passedCount} of ${testCases.length} tests`);
}

runTests();
