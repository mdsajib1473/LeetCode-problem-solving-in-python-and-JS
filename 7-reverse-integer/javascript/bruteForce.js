const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);

function reverse(x) {
  const sign = x < 0 ? -1 : 1;
  const reversedDigits = String(Math.abs(x)).split("").reverse().join("");
  const reversedValue = sign * parseInt(reversedDigits, 10);
  if (reversedValue < INT_MIN || reversedValue > INT_MAX) {
    return 0;
  }
  return reversedValue;
}

const testCases = [
  [123, 321],
  [-123, -321],
  [120, 21],
  [0, 0],
  [10, 1],
  [-10, -1],
  [901000, 109],
  [1534236469, 0],
  [2147483647, 0],
  [-2147483648, 0],
  [1463847412, 2147483641],
  [-1563847412, 0],
];

for (const [inputValue, expectedOutput] of testCases) {
  const actualOutput = reverse(inputValue);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: ${inputValue}`);
  console.log(`Expected: ${expectedOutput}`);
  console.log(`Output: ${actualOutput}`);
  console.log(`Result: ${result}`);
  console.log();
}
