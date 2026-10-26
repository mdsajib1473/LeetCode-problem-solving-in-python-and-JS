const INT_MAX = 2 ** 31 - 1;
const MAX_BEFORE_PUSH = Math.floor(INT_MAX / 10);
const MAX_LAST_DIGIT_POSITIVE = 7;
const MAX_LAST_DIGIT_NEGATIVE = 8;

function reverse(x) {
  const isNegative = x < 0;
  let remaining = Math.abs(x);
  const maxLastDigit = isNegative ? MAX_LAST_DIGIT_NEGATIVE : MAX_LAST_DIGIT_POSITIVE;
  let result = 0;

  while (remaining !== 0) {
    const digit = remaining % 10;
    remaining = Math.floor(remaining / 10);
    if (result > MAX_BEFORE_PUSH || (result === MAX_BEFORE_PUSH && digit > maxLastDigit)) {
      return 0;
    }
    result = result * 10 + digit;
  }

  return isNegative ? -result : result;
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
