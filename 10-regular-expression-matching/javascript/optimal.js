function isMatch(s, p) {
  const stringLength = s.length;
  const patternLength = p.length;
  const table = Array.from({ length: stringLength + 1 }, () => new Array(patternLength + 1).fill(false));
  table[0][0] = true;

  for (let j = 2; j <= patternLength; j++) {
    if (p[j - 1] === "*") {
      table[0][j] = table[0][j - 2];
    }
  }

  for (let i = 1; i <= stringLength; i++) {
    for (let j = 1; j <= patternLength; j++) {
      if (p[j - 1] === "*") {
        const matchesZero = j >= 2 && table[i][j - 2];
        const absorbsOneMore =
          j >= 2 && (p[j - 2] === "." || p[j - 2] === s[i - 1]) && table[i - 1][j];
        table[i][j] = matchesZero || absorbsOneMore;
      } else {
        table[i][j] = (p[j - 1] === "." || p[j - 1] === s[i - 1]) && table[i - 1][j - 1];
      }
    }
  }

  return table[stringLength][patternLength];
}

const testCases = [
  ["aa", "a", false],
  ["aa", "a*", true],
  ["ab", ".*", true],
  ["aab", "c*a*b", true],
  ["mississippi", "mis*is*p*.", false],
  ["mississippi", "mis*is*ip*.", true],
  ["a", ".*", true],
  ["aaa", "a*a", true],
  ["aaa", "ab*a*c*a", true],
  ["ab", ".*c", false],
  ["abcd", "d*", false],
  ["a", "ab*", true],
  ["bbbba", ".*a*a", true],
  ["aaa", "aaaa", false],
  ["a", "a*a*a*a*b", false],
  ["abc", "a.c", true],
];

for (const [inputString, pattern, expectedOutput] of testCases) {
  const actualOutput = isMatch(inputString, pattern);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: s = "${inputString}", p = "${pattern}"`);
  console.log(`Expected: ${expectedOutput}`);
  console.log(`Output: ${actualOutput}`);
  console.log(`Result: ${result}`);
  console.log();
}
