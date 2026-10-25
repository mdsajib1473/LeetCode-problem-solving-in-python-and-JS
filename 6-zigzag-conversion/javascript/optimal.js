function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const cycleLength = 2 * (numRows - 1);
  const stringLength = s.length;
  const result = [];

  for (let row = 0; row < numRows; row++) {
    for (let cycleStart = 0; cycleStart < stringLength; cycleStart += cycleLength) {
      const verticalIndex = cycleStart + row;
      if (verticalIndex < stringLength) {
        result.push(s[verticalIndex]);
      }
      if (row > 0 && row < numRows - 1) {
        const diagonalIndex = cycleStart + cycleLength - row;
        if (diagonalIndex < stringLength) {
          result.push(s[diagonalIndex]);
        }
      }
    }
  }

  return result.join("");
}

const testCases = [
  ["PAYPALISHIRING", 3, "PAHNAPLSIIGYIR"],
  ["PAYPALISHIRING", 4, "PINALSIGYAHRPI"],
  ["PAYPALISHIRING", 2, "PYAIHRNAPLSIIG"],
  ["A", 1, "A"],
  ["AB", 1, "AB"],
  ["ABCD", 2, "ACBD"],
  ["ABC", 5, "ABC"],
  ["AB.,", 3, "AB,."],
];

for (const [inputString, rowCount, expectedOutput] of testCases) {
  const actualOutput = convert(inputString, rowCount);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: s = ${JSON.stringify(inputString)}, numRows = ${rowCount}`);
  console.log(`Expected: ${JSON.stringify(expectedOutput)}`);
  console.log(`Output: ${JSON.stringify(actualOutput)}`);
  console.log(`Result: ${result}`);
  console.log();
}
