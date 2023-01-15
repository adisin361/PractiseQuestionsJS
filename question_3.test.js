const {capitalization, capitalizationArrow} = require('./question_3');
test('test_case_1', () => {
    expect(capitalization('aPPlE')).toBe('AppLe'); 
});
test('test_case_2', () => {
    expect(capitalization('BanAnA')).toBe('bANaNa'); 
});
test('test_case_3', () => {
    expect(capitalization('pAPAYA')).toBe('Papaya'); 
});
test('test_case_4', () => {
    expect(capitalization('Cherry')).toBe('cHERRY'); 
});
test('test_case_5', () => {
    expect(capitalizationArrow('KIWI')).toBe('kiwi'); 
});
test('test_case_6', () => {
    expect(capitalizationArrow('ChIkOo')).toBe('cHiKoO'); 
});
test('test_case_7', () => {
    expect(capitalizationArrow('grapes')).toBe('GRAPES'); 
});
test('test_case_8', () => {
    expect(capitalizationArrow('LiChee')).toBe('lIcHEE'); 
});
test('test_case_9', () => {
    expect(capitalizationArrow('gWaVa')).toBe('GwAvA'); 
});

