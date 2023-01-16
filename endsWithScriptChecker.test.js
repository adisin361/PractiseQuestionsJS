const { endsWithScript, endsWithScriptArrow } = require('./endsWithScriptChecker');
test('test_case_1', () => {
  expect(endsWithScript('TypeScript')).toBe(true);
});
test('test_case_2', () => {
  expect(endsWithScript('TypeScript')).toBe(true);
});
test('test_case_3', () => {
  expect(endsWithScript('happyScript')).toBe(true);
});
test('test_case_4', () => {
  expect(endsWithScript('javascript')).toBe(false);
});
test('test_case_5', () => {
  expect(endsWithScriptArrow('script')).toBe(false);
});
test('test_case_6', () => {
  expect(endsWithScriptArrow('yourScript')).toBe(true);
});
test('test_case_7', () => {
  expect(endsWithScriptArrow('csharp')).toBe(false);
});
test('test_case_8', () => {
  expect(endsWithScriptArrow('rubyonrails')).toBe(false);
});