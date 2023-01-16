const { largestEvenNumber, largestEvenNumberArrow } = require('./largestEvenNumberFinder');

test('testCase1', () => {
  expect(largestEvenNumber([3, 7, 2, 9, 12, 1])).toBe(12);
});
test('testCase2', () => {
  expect(largestEvenNumber([1, 6, 7, 3])).toBe(6);
});
test('testCase3', () => {
  expect(largestEvenNumber([78, 17, 102, 98, 111, 189])).toBe(102);
});
test('testCase4', () => {
  expect(largestEvenNumber([67, 88, 90, 12])).toBe(90);
});
test('testCase5', () => {
  expect(largestEvenNumberArrow([9, 8, 7, 6, 5, 4])).toBe(8);
});
test('testCase6', () => {
  expect(largestEvenNumberArrow([3, 7, 1, 97])).toBe(-1);
});
test('testCase7', () => {
  expect(largestEvenNumberArrow([87, 91, 93])).toBe(-1);
});
test('testCase8', () => {
  expect(largestEvenNumberArrow([67, 90, 12])).toBe(90);
});

