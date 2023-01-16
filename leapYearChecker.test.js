const { leapYear, leapYearArrow } = require('./leapYearChecker');
test('test_case_1', () => {
  expect(leapYear(2000)).toBe(true);
});
test('test_case_2', () => {
  expect(leapYear(2002)).toBe(false);
});
test('test_case_3', () => {
  expect(leapYear(2004)).toBe(true);
});
test('test_case_4', () => {
  expect(leapYear(2020)).toBe(true);
});
test('test_case_5', () => {
  expect(leapYearArrow(2022)).toBe(false);
});
test('test_case_6', () => {
  expect(leapYearArrow(2018)).toBe(false);
});
test('test_case_7', () => {
  expect(leapYearArrow(2016)).toBe(true);
});
test('test_case_8', () => {
  expect(leapYearArrow(2012)).toBe(true);
});