function isWellFormed(candidate) {
  let balance = 0;
  for (const character of candidate) {
    if (character === "(") {
      balance++;
    } else {
      balance--;
    }
    if (balance < 0) {
      return false;
    }
  }
  return balance === 0;
}

function generateParenthesis(n) {
  const combinations = [];
  const path = [];
  const targetLength = 2 * n;

  function backtrack(openCount, closeCount) {
    if (path.length === targetLength) {
      combinations.push(path.join(""));
      return;
    }
    if (openCount < n) {
      path.push("(");
      backtrack(openCount + 1, closeCount);
      path.pop();
    }
    if (closeCount < openCount) {
      path.push(")");
      backtrack(openCount, closeCount + 1);
      path.pop();
    }
  }

  backtrack(0, 0);
  return combinations;
}

function runTests() {
  const testCases = [
    { n: 1, expected: ["()"] },
    { n: 2, expected: ["(())", "()()"] },
    { n: 3, expected: ["((()))", "(()())", "(())()", "()(())", "()()()"] },
    {
      n: 4,
      expected: [
        "(((())))", "((()()))", "((())())", "((()))()", "(()(()))",
        "(()()())", "(()())()", "(())(())", "(())()()", "()((()))",
        "()(()())", "()(())()", "()()(())", "()()()()",
      ],
    },
    { n: 5, count: 42, first: "((((()))))", last: "()()()()()" },
    { n: 6, count: 132, first: "(((((())))))", last: "()()()()()()" },
    { n: 7, count: 429 },
    { n: 8, count: 1430, first: "(((((((())))))))", last: "()()()()()()()()" },
  ];

  let passedCount = 0;
  for (const testCase of testCases) {
    const n = testCase.n;
    const actual = generateParenthesis(n);
    const sortedActual = [...actual].sort();
    const allWellFormed = actual.every(
      (combination) => combination.length === 2 * n && isWellFormed(combination)
    );
    let passed;
    console.log(`Input:    n = ${n}`);

    if (testCase.expected) {
      const sortedExpected = [...testCase.expected].sort();
      passed = JSON.stringify(sortedActual) === JSON.stringify(sortedExpected) && allWellFormed;
      console.log(`Expected: ${JSON.stringify(sortedExpected)}`);
      console.log(`Actual:   ${JSON.stringify(sortedActual)}`);
    } else {
      const allUnique = new Set(actual).size === actual.length;
      const actualFirst = sortedActual[0];
      const actualLast = sortedActual[sortedActual.length - 1];
      passed = actual.length === testCase.count && allUnique && allWellFormed;
      let expectedDescription = `length ${testCase.count}, all unique, all well formed`;
      let actualDescription = `length ${actual.length}, all unique ${allUnique}, all well formed ${allWellFormed}`;
      if (testCase.first) {
        passed = passed && actualFirst === testCase.first && actualLast === testCase.last;
        expectedDescription += `, first "${testCase.first}", last "${testCase.last}"`;
        actualDescription += `, first "${actualFirst}", last "${actualLast}"`;
      }
      console.log(`Expected: ${expectedDescription}`);
      console.log(`Actual:   ${actualDescription}`);
    }

    if (passed) passedCount++;
    console.log(`Result:   ${passed ? "PASS" : "FAIL"}`);
    console.log();
  }

  console.log(`Passed ${passedCount} of ${testCases.length} tests`);
}

runTests();
