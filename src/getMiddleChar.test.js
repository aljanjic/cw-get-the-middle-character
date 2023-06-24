const getMiddle = require('./getMiddleChar');

describe('getMiddleChar', () => {
  it('should return "" when given not string, or empty string', () => {
    expect(getMiddle()).toBe('');
    expect(getMiddle(123)).toBe('');
    expect(getMiddle(null)).toBe('');
    expect(getMiddle('')).toBe('');
  });
  it('should return "A" when given "A"', () => {
    expect(getMiddle('A')).toBe('A');
  });
  it('should return "DD" when given "DD"', () => {
    expect(getMiddle('DD')).toBe('DD');
  });
  it('should return "aa" when given "aa"', () => {
    expect(getMiddle('aa')).toBe('aa');
  });
  it('should return "b" when given "aba"', () => {
    expect(getMiddle('aba')).toBe('b');
  });
  it('should return "oo" when given "lool"', () => {
    expect(getMiddle('lool')).toBe('oo');
  });
  it('should return "ab" when given "sabl"', () => {
    expect(getMiddle('sabl')).toBe('ab');
  });
  it('should return "Sa" when given "sAdSaAbl"', () => {
    expect(getMiddle('sAdSaAbl')).toBe('Sa');
  });
  it("should return 'G' when given 'enGel'", () => {
    expect(getMiddle('enGel')).toBe('G');
  });
});