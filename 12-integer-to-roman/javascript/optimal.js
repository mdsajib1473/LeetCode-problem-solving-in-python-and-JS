const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const SYMBOLS = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function intToRoman(num) {
  let remaining = num;
  const result = [];

  for (let index = 0; index < VALUES.length && remaining > 0; index++) {
    while (remaining >= VALUES[index]) {
      result.push(SYMBOLS[index]);
      remaining -= VALUES[index];
    }
  }

  return result.join("");
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
