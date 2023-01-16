const { longestString, longestStringArrow } = require('./longestStringInArray');
test('test_case_1', () => {
  expect(longestString(['france', 'india', 'italy', 'spain', 'japan'])).toBe('france');
});
test('test_case_2', () => {
  expect(longestString(['apple', 'microsoft', 'uber', 'trilogy'])).toBe('microsoft');
});
test('test_case_3', () => {
  expect(longestString(['one', 'two', 'three', 'four'])).toBe('three');
});
test('test_case_4', () => {
  expect(longestString(['marriott', 'taj', 'radissonblu'])).toBe('radissonblu');
});
test('test_case_5', () => {
  expect(longestStringArrow(['bangalore', 'kolkata', 'mumbai'])).toBe('bangalore');
});
test('test_case_6', () => {
  expect(longestStringArrow(['guitar', 'piano', 'violin', 'keyboard'])).toBe('keyboard');
});
test('test_case_7', () => {
  expect(longestStringArrow(['hola', 'heyyy', 'salut', 'bonjour', 'konichiwa'])).toBe('konichiwa');
});
test('test_case_9', () => {
  expect(longestStringArrow(['pie', 'cheesecake', 'truffle'])).toBe('cheesecake');
});