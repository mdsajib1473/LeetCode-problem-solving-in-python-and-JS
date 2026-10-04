function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = Math.max(left, lastSeen.get(ch) + 1);
    }

    lastSeen.set(ch, right);

    best = Math.max(best, right - left + 1);
  }

  return best;
}

function main() {
  const testCases = [
    ["abcabcbb", 3],    // "abc"
    ["bbbbb", 1],       // "b"
    ["pwwkew", 3],      // "wke"
    ["", 0],            // empty string has no substring
    ["dvdf", 3],        // "vdf", the window has to start after the first d
    ["abba", 2],        // "ab" or "ba", the tricky left pointer case
  ];

  let allPassed = true;

  for (const [s, expected] of testCases) {
    const actual = lengthOfLongestSubstring(s);
    const passed = actual === expected;
    allPassed = allPassed && passed;

    console.log("input:    " + JSON.stringify(s));
    console.log("expected: " + expected);
    console.log("actual:   " + actual);
    console.log("result:   " + (passed ? "PASS" : "FAIL"));
    console.log();
  }

  console.log(allPassed ? "all tests passed" : "some tests failed");
}

main();
