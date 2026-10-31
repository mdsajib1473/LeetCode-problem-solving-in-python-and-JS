const BASIC_SYMBOLS = [
  [1000, "M"],
  [500, "D"],
  [100, "C"],
  [50, "L"],
  [10, "X"],
  [5, "V"],
  [1, "I"],
];

const SUBTRACTIVE_REPLACEMENTS = [
  ["DCCCC", "CM"],
  ["CCCC", "CD"],
  ["LXXXX", "XC"],
  ["XXXX", "XL"],
  ["VIIII", "IX"],
  ["IIII", "IV"],
];

function intToRoman(num) {
  let remaining = num;
  let numeral = "";
  for (const [value, symbol] of BASIC_SYMBOLS) {
    const repeatCount = Math.floor(remaining / value);
    numeral += symbol.repeat(repeatCount);
    remaining -= repeatCount * value;
  }

  for (const [longForm, subtractiveForm] of SUBTRACTIVE_REPLACEMENTS) {
    numeral = numeral.replaceAll(longForm, subtractiveForm);
  }

  return numeral;
}

const testCases = [
  [3, "III"],
  [4, "IV"],
  [9, "IX"],
  [58, "LVIII"],
  [1994, "MCMXCIV"],
  [3749, "MMMDCCXLIX"],
  [1, "I"],
  [3999, "MMMCMXCIX"],
  [40, "XL"],
  [90, "XC"],
  [400, "CD"],
  [900, "CM"],
  [444, "CDXLIV"],
  [2024, "MMXXIV"],
  [1000, "M"],
  [49, "XLIX"],
];

for (const [inputValue, expectedOutput] of testCases) {
  const actualOutput = intToRoman(inputValue);
  const result = actualOutput === expectedOutput ? "PASS" : "FAIL";
  console.log(`Input: ${inputValue}`);
  console.log(`Expected: "${expectedOutput}"`);
  console.log(`Output: "${actualOutput}"`);
  console.log(`Result: ${result}`);
  console.log();
}
