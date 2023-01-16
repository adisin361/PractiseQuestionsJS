const doubleNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    return -1;
  }

  return numbers.map(num => num * 2);
};

const tripleNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Input is not an array');
  }
  let tripleNums = numbers.map(num => num * 3).filter(number => number % 2 == 0);
  return tripleNums;
};

console.log(tripleNumbers([1, 2, 3, 4]));
module.exports = { doubleNumbers, tripleNumbers };