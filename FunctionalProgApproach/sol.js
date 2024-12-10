const phoneKeypad = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

// Input validation 
const validatePhoneInput = (phoneDigits) => {
  if (phoneDigits === null || phoneDigits === undefined) {
      throw new Error('Input cannot be null or undefined');
  }

  if (phoneDigits.length > 4) {
      throw new Error('Input exceeds maximum length of 4 digits');
  }

  return [...phoneDigits].every(digit => 
      digit in phoneKeypad
  );
};

const letterCombinations = (digits) => {
  if (!validatePhoneInput(digits)) {
      throw new Error('Invalid input: Only digits 2-9 are allowed');
  }

  if (digits.length === 0) return [];

  // Let's use the functional approach with reduce
  return [...digits].reduce((combinations, digit) => {
      if (combinations.length === 0) {
          return phoneKeypad[digit];
      }

      return combinations.flatMap(combo => 
          phoneKeypad[digit].map(letter => combo + letter)
      );
  }, []);
};

// Test cases
const testCases = ['', '1', '23', '234'];

testCases.forEach(testCase => {
  try {
      console.log(`Input: "${testCase}"`);
      const result = letterCombinations(testCase);
      console.log('Output:', result);
      console.log('Number of combinations:', result.length);
      console.log('---');
  } catch (error) {
      console.error(`Error for input "${testCase}": ${error.message}`);
      console.log('---');
  }
});