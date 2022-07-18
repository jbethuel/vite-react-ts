import { greet } from '../greet';

describe('utils/greet', () => {
  test('should return hello', () => {
    expect(greet('developer')).toBe('hello, developer!');
  });
});
