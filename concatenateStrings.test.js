const { concatenate, concatenateArrow } = require('./concatenateStrings');
test('test_case_1', () => {
  expect(concatenate('aditya', 'sinha')).toBe('dityainha');
});
test('test_case_2', () => {
  expect(concatenate('mahendra', 'singh')).toBe('ahendraingh');
});
test('test_case_3', () => {
  expect(concatenate('mckinsey', 'company')).toBe('ckinseyompany');
});
test('test_case_4', () => {
  expect(concatenateArrow('aloft', 'marriott')).toBe('loftarriott');
});
test('test_case_5', () => {
  expect(concatenateArrow('java', 'script')).toBe('avacript');
});
test('test_case_6', () => {
  expect(concatenateArrow('air', 'pods')).toBe('irods');
});
test('test_case_7', () => {
  expect(concatenateArrow('digital', 'india')).toBe('igitalndia');
});
test('test_case_8', () => {
  expect(concatenateArrow('google', 'chrome')).toBe('ooglehrome');
});

