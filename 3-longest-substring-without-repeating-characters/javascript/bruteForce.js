

function lengthOfLongestSubstring(s) {
  let best = 0;

  for (let start = 0; start < s.length; start++) {
    const seen = new Set();

    for (let end = start; end < s.length; end++) {
      const ch = s[end];

      if (seen.has(ch)) {
        break;
      }

      seen.add(ch);
      best = Math.max(best, seen.size);
    }
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
