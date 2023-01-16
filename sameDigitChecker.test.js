const { sameDigits, sameDigitsArrow } = require('./sameDigitChecker');
test('test_case_1', () => {
  expect(sameDigits(1111)).toBe(true);
});
test('test_case_2', () => {
  expect(sameDigits(1234)).toBe(false);
});
test('test_case_3', () => {
  expect(sameDigits(99)).toBe(true);
});
test('test_case_4', () => {
  expect(sameDigits(34)).toBe(false);
});
test('test_case_5', () => {
  expect(sameDigitsArrow(9876)).toBe(false);
});
test('test_case_6', () => {
  expect(sameDigitsArrow(66)).toBe(true);
});
test('test_case_7', () => {
  expect(sameDigitsArrow(199)).toBe(false);
});
test('test_case_8', () => {
  expect(sameDigitsArrow(99)).toBe(true);
});