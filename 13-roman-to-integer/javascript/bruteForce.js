const SUBTRACTIVE_PAIRS = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const SINGLE_SYMBOLS = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  let total = 0;
  let index = 0;

  while (index < s.length) {
    const pair = s.slice(index, index + 2);
    if (Object.hasOwn(SUBTRACTIVE_PAIRS, pair)) {
      total += SUBTRACTIVE_PAIRS[pair];
      index += 2;
    } else {
      total += SINGLE_SYMBOLS[s[index]];
      index += 1;
    }
  }

  return total;
}

const testCases = [
  ["III", 3],
  ["LVIII", 58],
  ["MCMXCIV", 1994],
  ["IV", 4],
  ["IX", 9],
  ["XL", 40],
  ["XC", 90],
  ["CD", 400],
  ["CM", 900],
  ["I", 1],
  ["MMMCMXCIX", 3999],
  ["MMMDCCXLIX", 3749],
  ["CDXLIV", 444],
  ["MMXXIV", 2024],
  ["M", 1000],
  ["XLIX", 49],
];

for (const [inputValue, expectedOutput] of testCases) {
  const actualOutput = romanToInt(inputValue);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: "${inputValue}"`);
  console.log(`Expected: ${expectedOutput}`);
  console.log(`Output: ${actualOutput}`);
  console.log(`Result: ${result}`);
  console.log();
}
