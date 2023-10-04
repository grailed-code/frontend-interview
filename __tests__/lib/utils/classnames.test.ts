import classnames from '../../../lib/utils/classnames';

describe('classnames function', () => {
  test('should concatenate strings', () => {
    expect(classnames('class1', 'class2')).toBe('class1 class2');
  });

  test('should ignore null values', () => {
    expect(classnames('class1', null, 'class2')).toBe('class1 class2');
  });

  test('should ignore undefined values', () => {
    expect(classnames('class1', undefined, 'class2')).toBe('class1 class2');
  });

  test('should ignore falsey values', () => {
    expect(classnames('class1', '', 'class2')).toBe('class1 class2');
  });

  test('should return an empty string if all arguments are null or undefined', () => {
    expect(classnames(null, undefined)).toBe('');
  });

  test('should return an empty string if no arguments are provided', () => {
    expect(classnames()).toBe('');
  });

  test('should handle a mix of string, null, and undefined', () => {
    expect(classnames('class1', null, 'class2', undefined, 'class3')).toBe(
      'class1 class2 class3'
    );
  });
});
