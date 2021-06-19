const duplicateCount = require('./counting_duplicates');
const repeatTest = require('../../utils/repeat_test');

const TESTS = [
  { input: '', output: 0 },
  { input: 'abcde', output: 0 },
  { input: 'aabbcde', output: 2 },
  { input: 'aabBcde', output: 2 },
  { input: 'Indivisibility', output: 1 },
  { input: 'Indivisibilities', output: 2 },
];

describe('Определяет самую часто встречающеюся букву', () => {
  repeatTest(TESTS, duplicateCount, 'toBe');
});
