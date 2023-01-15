const {replaceChar, replaceCharArrow} = require('./question_9')
test('test_case_1', () => {
    expect(replaceChar('aditya')).toBe('bejuzb'); 
});
test('test_case_2', () => {
    expect(replaceChar('apple')).toBe('bqqmf'); 
});
test('test_case_3', () => {
    expect(replaceChar('football')).toBe('gppucbmm'); 
});
test('test_case_4', () => {
    expect(replaceChar('aloft')).toBe('bmpgu'); 
});
test('test_case_5', () => {
    expect(replaceCharArrow('java')).toBe('kbwb'); 
});
test('test_case_6', () => {
    expect(replaceCharArrow('air')).toBe('bjs'); 
});
test('test_case_7', () => {
    expect(replaceCharArrow('digital')).toBe('ejhjubm'); 
});
test('test_case_8', () => {
    expect(replaceCharArrow('google')).toBe('hpphmf'); 
});