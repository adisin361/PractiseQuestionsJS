const {leapYear, leapYearArrow} = require('./question_5');
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
    expect(leapYear(2022)).toBe(false); 
});
test('test_case_6', () => {
    expect(leapYear(2018)).toBe(false); 
});
test('test_case_7', () => {
    expect(leapYear(2016)).toBe(true); 
});
test('test_case_8', () => {
    expect(leapYear(2012)).toBe(true); 
});