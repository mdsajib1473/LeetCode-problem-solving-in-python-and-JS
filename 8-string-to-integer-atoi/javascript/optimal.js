const INT_MAX = 2 ** 31 - 1;
const INT_MIN = -(2 ** 31);
const MAX_BEFORE_PUSH = Math.floor(INT_MAX / 10);
const MAX_LAST_DIGIT = 7;
const ZERO_CODE = "0".charCodeAt(0);
const NINE_CODE = "9".charCodeAt(0);

function myAtoi(s) {
  let index = 0;
  const length = s.length;

  while (index < length && s[index] === " ") {
    index++;
  }

  let sign = 1;
  if (index < length && (s[index] === "+" || s[index] === "-")) {
    if (s[index] === "-") {
      sign = -1;
    }
    index++;
  }

  let result = 0;
  while (index < length) {
    const characterCode = s.charCodeAt(index);
    if (characterCode < ZERO_CODE || characterCode > NINE_CODE) {
      break;
    }
    const digit = characterCode - ZERO_CODE;
    if (result > MAX_BEFORE_PUSH || (result === MAX_BEFORE_PUSH && digit > MAX_LAST_DIGIT)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    result = result * 10 + digit;
    index++;
  }

  return result === 0 ? 0 : sign * result;
}

const testCases = [
  ["42", 42],
  ["   -042", -42],
  ["1337c0d3", 1337],
  ["0-1", 0],
  ["words and 987", 0],
  ["", 0],
  ["   ", 0],
  ["+1", 1],
  ["+-12", 0],
  ["-91283472332", -2147483648],
  ["91283472332", 2147483647],
  ["2147483647", 2147483647],
  ["-2147483648", -2147483648],
  ["2147483648", 2147483647],
  ["3.14159", 3],
  [".1", 0],
  ["  +0 123", 0],
  ["00000-42a1234", 0],
];

for (const [inputString, expectedOutput] of testCases) {
  const actualOutput = myAtoi(inputString);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: "${inputString}"`);
  console.log(`Expected: ${expectedOutput}`);
  console.log(`Output: ${actualOutput}`);
  console.log(`Result: ${result}`);
  console.log();
}
