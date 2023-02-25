const {bruteForce} = require('./functions');

describe('Contains Duplicate', () => {
    test('returns true if any value appears at least twice in the array', () => {
      expect(bruteForce([1, 2, 3, 1])).toBe(true);
      expect(bruteForce([1, 2, 3, 4])).toBe(false);
      expect(bruteForce([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
      expect(bruteForce([1])).toBe(false)
      expect(bruteForce([])).toBe(false)
    });
  });