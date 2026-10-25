function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const columnCount = s.length;
  const grid = Array.from({ length: numRows }, () => new Array(columnCount).fill(null));

  let row = 0;
  let column = 0;
  let movingDown = true;
  for (const character of s) {
    grid[row][column] = character;
    if (movingDown) {
      if (row === numRows - 1) {
        movingDown = false;
        row--;
        column++;
      } else {
        row++;
      }
    } else {
      if (row === 0) {
        movingDown = true;
        row++;
      } else {
        row--;
        column++;
      }
    }
  }

  const result = [];
  for (const gridRow of grid) {
    for (const cell of gridRow) {
      if (cell !== null) {
        result.push(cell);
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
