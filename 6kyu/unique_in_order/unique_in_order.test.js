const uniqueInOrder = require('./unique_in_order');
const repeatTest = require('../../utils/repeat_test');

const TESTS = [
  { input: 'AAAABBBCCDAABBB', output: ['A', 'B', 'C', 'D', 'A', 'B'] },
  { input: 'ABBCcAD', output: ['A', 'B', 'C', 'c', 'A', 'D'] },
  { input: [1, 2, 2, 3, 3], output: [1, 2, 3] },
];

describe('Возвращает массив уникальных элементов', () => {
  repeatTest(TESTS, uniqueInOrder, 'toEqual');
});
