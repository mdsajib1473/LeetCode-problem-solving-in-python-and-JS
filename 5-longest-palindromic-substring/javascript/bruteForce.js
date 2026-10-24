function isPalindrome(text) {
  let left = 0;
  let right = text.length - 1;
  while (left < right) {
    if (text[left] !== text[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function longestPalindrome(s) {
  let longest = "";
  for (let start = 0; start < s.length; start++) {
    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.slice(start, end);
      if (substring.length > longest.length && isPalindrome(substring)) {
        longest = substring;
      }
    }
  }
  return longest;
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
