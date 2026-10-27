const INT_MAX = 2n ** 31n - 1n;
const INT_MIN = -(2n ** 31n);

function isDigitCharacter(character) {
  return character >= "0" && character <= "9";
}

function myAtoi(s) {
  let firstNonSpace = 0;
  while (firstNonSpace < s.length && s[firstNonSpace] === " ") {
    firstNonSpace++;
  }
  let remaining = s.slice(firstNonSpace);

  let sign = 1n;
  if (remaining.length > 0 && (remaining[0] === "+" || remaining[0] === "-")) {
    if (remaining[0] === "-") {
      sign = -1n;
    }
    remaining = remaining.slice(1);
  }

  let digitString = "";
  for (const character of remaining) {
    if (!isDigitCharacter(character)) {
      break;
    }
    digitString += character;
  }

  if (digitString === "") {
    return 0;
  }

  let value = sign * BigInt(digitString);
  if (value > INT_MAX) {
    value = INT_MAX;
  } else if (value < INT_MIN) {
    value = INT_MIN;
  }
  return Number(value);
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
