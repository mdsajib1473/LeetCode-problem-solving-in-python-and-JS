function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const totalLength = merged.length;
  const middleIndex = Math.floor(totalLength / 2);
  if (totalLength % 2 === 1) {
    return merged[middleIndex];
  }
  return (merged[middleIndex - 1] + merged[middleIndex]) / 2;
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
