const repeatTest = (arr, fun, equal) => {
  arr.forEach((it) => {
    test(`'${it.input}' => ${it.output}`, () => {
      expect(fun(it.input))[equal](it.output);
    });
  });
};

// eslint-disable-next-line jest/no-export
module.exports = repeatTest;
