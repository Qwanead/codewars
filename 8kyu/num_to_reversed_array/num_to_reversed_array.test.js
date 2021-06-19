const digitize = require('./num_to_reversed_array');
const repeatTest = require('../../utils/repeat_test');

const TESTS = [
  { input: 35231, output: [1, 3, 2, 5, 3] },
];

describe('Преобразует число в перевернутый массив', () => {
  repeatTest(TESTS, digitize, 'toEqual');
});
