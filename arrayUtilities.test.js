
const { doubleNumbers, tripleNumbers } = require('./arrayUtilities');
describe('Array Utilities', () => {
  describe('Double Numbers', () => {
    it('Should double the elements when input is an array', () => {
      const result = doubleNumbers([1, 2, 3, 4]);
      expect(result).toEqual([2, 4, 6, 8]);
    });

    it('Should return -1 hwen input is not an array', () => {
      const result = doubleNumbers(1);
      expect(result).toBe(-1);
    });
  });

  describe('Triple Numbers', () => {
    it('Should triple the elements when input is an array', () => {
      const result = tripleNumbers([1, 2, 3, 4]);
      expect(result).toEqual([6, 12]);
    });
    it('Should return -1 when input is not an array', () => {
      expect(() => tripleNumbers('a')).toThrow('Input is not an array');
    });
  });
});
