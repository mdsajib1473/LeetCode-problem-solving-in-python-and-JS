const DIGIT_TO_LETTERS = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }
  const combinations = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      combinations.push(path.join(""));
      return;
    }
    for (const letter of DIGIT_TO_LETTERS[digits[index]]) {
      path.push(letter);
      backtrack(index + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return combinations;
}

function sortedCopy(list) {
  return [...list].sort();
}

function checkExact(actual, expected) {
  return JSON.stringify(sortedCopy(actual)) === JSON.stringify(sortedCopy(expected));
}

function checkLengthAndBounds(actual, expectedLength, firstEntry, lastEntry) {
  const sortedActual = sortedCopy(actual);
  return (
    sortedActual.length === expectedLength &&
    sortedActual[0] === firstEntry &&
    sortedActual[sortedActual.length - 1] === lastEntry
  );
}

function checkLengthAndUnique(actual, expectedLength) {
  return actual.length === expectedLength && new Set(actual).size === expectedLength;
}

function runTests() {
  const exactCases = [
    ["23", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]],
    ["", []],
    ["2", ["a", "b", "c"]],
    ["7", ["p", "q", "r", "s"]],
    ["9", ["w", "x", "y", "z"]],
    ["79", ["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"]],
    ["22", ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"]],
    ["89", ["tw", "tx", "ty", "tz", "uw", "ux", "uy", "uz", "vw", "vx", "vy", "vz"]],
  ];
  const boundsCases = [
    ["234", 27, "adg", "cfi"],
    ["2345", 81, "adgj", "cfil"],
  ];
  const uniqueCases = [["7777", 256]];

  let passedCount = 0;
  let totalCount = 0;

  for (const [digits, expected] of exactCases) {
    const actual = letterCombinations(digits);
    const passed = checkExact(actual, expected);
    totalCount += 1;
    if (passed) passedCount += 1;
    console.log(`Input: "${digits}"`);
    console.log(`Expected: ${JSON.stringify(sortedCopy(expected))}`);
    console.log(`Actual:   ${JSON.stringify(sortedCopy(actual))}`);
    console.log(`Result:   ${passed ? "PASS" : "FAIL"}`);
    console.log();
  }

  for (const [digits, expectedLength, firstEntry, lastEntry] of boundsCases) {
    const actual = letterCombinations(digits);
    const sortedActual = sortedCopy(actual);
    const passed = checkLengthAndBounds(actual, expectedLength, firstEntry, lastEntry);
    totalCount += 1;
    if (passed) passedCount += 1;
    console.log(`Input: "${digits}"`);
    console.log(`Expected: length ${expectedLength}, first "${firstEntry}", last "${lastEntry}"`);
    console.log(
      `Actual:   length ${actual.length}, first "${sortedActual[0]}", last "${sortedActual[sortedActual.length - 1]}"`
    );
    console.log(`Result:   ${passed ? "PASS" : "FAIL"}`);
    console.log();
  }

  for (const [digits, expectedLength] of uniqueCases) {
    const actual = letterCombinations(digits);
    const passed = checkLengthAndUnique(actual, expectedLength);
    totalCount += 1;
    if (passed) passedCount += 1;
    console.log(`Input: "${digits}"`);
    console.log(`Expected: length ${expectedLength}, all unique`);
    console.log(`Actual:   length ${actual.length}, unique count ${new Set(actual).size}`);
    console.log(`Result:   ${passed ? "PASS" : "FAIL"}`);
    console.log();
  }

  console.log(`Passed ${passedCount} of ${totalCount} tests`);
}

runTests();
