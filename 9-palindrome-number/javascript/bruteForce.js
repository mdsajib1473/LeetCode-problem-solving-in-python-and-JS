function isPalindrome(x) {
  const digits = String(x);
  return digits === digits.split("").reverse().join("");
}

const testCases = [
  [121, true],
  [-121, false],
  [10, false],
  [0, true],
  [1, true],
  [11, true],
  [12321, true],
  [123321, true],
  [1001, true],
  [100, false],
  [1000021, false],
  [-101, false],
  [2147447412, true],
  [2147483647, false],
  [-2147447412, false],
];

for (const [inputValue, expectedOutput] of testCases) {
  const actualOutput = isPalindrome(inputValue);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: ${inputValue}`);
  console.log(`Expected: ${expectedOutput}`);
  console.log(`Output: ${actualOutput}`);
  console.log(`Result: ${result}`);
  console.log();
}
