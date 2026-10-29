function isMatch(s, p) {
  function matchesFrom(stringIndex, patternIndex) {
    if (patternIndex === p.length) {
      return stringIndex === s.length;
    }

    const firstCharactersMatch =
      stringIndex < s.length && (p[patternIndex] === "." || p[patternIndex] === s[stringIndex]);

    if (patternIndex + 1 < p.length && p[patternIndex + 1] === "*") {
      const skipStarGroup = matchesFrom(stringIndex, patternIndex + 2);
      const absorbOneCharacter = firstCharactersMatch && matchesFrom(stringIndex + 1, patternIndex);
      return skipStarGroup || absorbOneCharacter;
    }

    return firstCharactersMatch && matchesFrom(stringIndex + 1, patternIndex + 1);
  }

  return matchesFrom(0, 0);
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
