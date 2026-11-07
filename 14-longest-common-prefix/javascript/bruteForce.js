function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (let index = 1; index < strs.length; index++) {
    const current = strs[index];
    while (!current.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
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
