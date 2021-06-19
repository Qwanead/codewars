const uniqueInOrder = (iterable) => Array.from(iterable)
  .filter((el, index, arr) => el !== arr[index - 1]);

module.exports = uniqueInOrder;
