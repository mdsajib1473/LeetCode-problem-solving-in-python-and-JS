function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return [left + 1, right - 1];
}

function longestPalindrome(s) {
  let bestStart = 0;
  let bestLength = 0;
  for (let center = 0; center < s.length; center++) {
    for (const [left, right] of [[center, center], [center, center + 1]]) {
      const [start, end] = expandAroundCenter(s, left, right);
      const length = end - start + 1;
      if (length > bestLength) {
        bestStart = start;
        bestLength = length;
      }
    }
  }
  return s.slice(bestStart, bestStart + bestLength);
}

const testCases = [
  ["babad", ["bab", "aba"]],
  ["cbbd", ["bb"]],
  ["a", ["a"]],
  ["ac", ["a", "c"]],
  ["racecar", ["racecar"]],
  ["forgeeksskeegfor", ["geeksskeeg"]],
  ["abacdfgdcaba", ["aba"]],
  ["bb", ["bb"]],
  ["abcda", ["a", "b", "c", "d"]],
];

for (const [inputString, acceptedAnswers] of testCases) {
  const actualOutput = longestPalindrome(inputString);
  const result = acceptedAnswers.includes(actualOutput) ? "PASS" : "FAIL";
  console.log(`Input: ${JSON.stringify(inputString)}`);
  console.log(`Accepted: ${JSON.stringify(acceptedAnswers)}`);
  console.log(`Output: ${JSON.stringify(actualOutput)}`);
  console.log(`Result: ${result}`);
  console.log();
}
