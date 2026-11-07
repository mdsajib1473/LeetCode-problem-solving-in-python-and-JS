function longestCommonPrefix(strs) {
  const first = strs[0];

  for (let index = 0; index < first.length; index++) {
    const character = first[index];
    for (let otherIndex = 1; otherIndex < strs.length; otherIndex++) {
      const other = strs[otherIndex];
      if (other.length === index || other[index] !== character) {
        return first.slice(0, index);
      }
    }
  }

  return first;
}

const testCases = [
  [["flower", "flow", "flight"], "fl"],
  [["dog", "racecar", "car"], ""],
  [["a"], "a"],
  [["", "b"], ""],
  [["ab", "a"], "a"],
  [["flower", "flower", "flower"], "flower"],
  [["interview", "internet", "interval", "internal"], "inter"],
  [["abc", "abcd", "ab"], "ab"],
  [["c", "acc", "ccc"], ""],
  [["prefix", "pre", "prefab"], "pre"],
  [["", "", ""], ""],
  [["reflower", "flow", "flight"], ""],
  [["aaa", "aa", "aaa"], "aa"],
  [["x", "x"], "x"],
];

for (const [inputValue, expectedOutput] of testCases) {
  const actualOutput = longestCommonPrefix(inputValue);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: ${JSON.stringify(inputValue)}`);
  console.log(`Expected: "${expectedOutput}"`);
  console.log(`Output: "${actualOutput}"`);
  console.log(`Result: ${result}`);
  console.log();
}
