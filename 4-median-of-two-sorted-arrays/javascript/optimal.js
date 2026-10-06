function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const shorterLength = nums1.length;
  const longerLength = nums2.length;
  const leftHalfSize = Math.floor((shorterLength + longerLength + 1) / 2);
  let low = 0;
  let high = shorterLength;

  while (low <= high) {
    const partitionA = Math.floor((low + high) / 2);
    const partitionB = leftHalfSize - partitionA;

    const maxLeftA = partitionA > 0 ? nums1[partitionA - 1] : -Infinity;
    const minRightA = partitionA < shorterLength ? nums1[partitionA] : Infinity;
    const maxLeftB = partitionB > 0 ? nums2[partitionB - 1] : -Infinity;
    const minRightB = partitionB < longerLength ? nums2[partitionB] : Infinity;

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((shorterLength + longerLength) % 2 === 1) {
        return Math.max(maxLeftA, maxLeftB);
      }
      return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
    }

    if (maxLeftA > minRightB) {
      high = partitionA - 1;
    } else {
      low = partitionA + 1;
    }
  }

  throw new Error("Input arrays must be sorted");
}

const testCases = [
  { nums1: [1, 3], nums2: [2], expected: 2.0 },
  { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
  { nums1: [], nums2: [1], expected: 1.0 },
  { nums1: [2], nums2: [], expected: 2.0 },
  { nums1: [0, 0], nums2: [0, 0], expected: 0.0 },
  { nums1: [1, 3], nums2: [2, 7], expected: 2.5 },
  { nums1: [1, 2, 3, 4, 5], nums2: [6, 7, 8, 9, 10], expected: 5.5 },
  { nums1: [-5, -3], nums2: [-4], expected: -4.0 },
];

const formatNumber = (value) => (Number.isInteger(value) ? value.toFixed(1) : String(value));

for (const { nums1, nums2, expected } of testCases) {
  const actual = findMedianSortedArrays(nums1, nums2);
  const result = actual === expected ? "PASS" : "FAIL";
  console.log(`nums1 = ${JSON.stringify(nums1)}, nums2 = ${JSON.stringify(nums2)}`);
  console.log(`Expected: ${formatNumber(expected)}, Actual: ${formatNumber(actual)}, Result: ${result}`);
  console.log();
}
