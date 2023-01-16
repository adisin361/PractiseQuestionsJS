const { vowelsCount, vowelsCountArrow } = require('./vowelsCounter');
test('test_case_1', () => {
  expect(vowelsCount('aditya')).toBe(3);
});
test('test_case_2', () => {
  expect(vowelsCount('mahendra')).toBe(3);
});
test('test_case_3', () => {
  expect(vowelsCount('mckinsey')).toBe(2);
});
test('test_case_4', () => {
  expect(vowelsCountArrow('aloft')).toBe(2);
});
test('test_case_5', () => {
  expect(vowelsCountArrow('java')).toBe(2);
});
test('test_case_6', () => {
  expect(vowelsCountArrow('air')).toBe(2);
});
test('test_case_7', () => {
  expect(vowelsCountArrow('digital')).toBe(3);
});
test('test_case_8', () => {
  expect(vowelsCountArrow('google')).toBe(3);
});