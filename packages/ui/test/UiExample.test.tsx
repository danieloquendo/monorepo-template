import { sum } from '../src/components/UiExample';

describe('Button', () => {
  test('Renders UiExample', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
