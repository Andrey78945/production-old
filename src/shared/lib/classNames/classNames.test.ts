/* eslint-disable linebreak-style */
// import { classNames } from './classNames';

import { classNames } from 'shared/lib/classNames/classNames';

/* eslint-disable linebreak-style */
describe('classNames', () => {
  test('test with only first parametr', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('test with additional classes', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('test with mods and additional classes', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('test with false mods and additional classes', () => {
    const expected = 'someClass class1 class2 scrollable';
    expect(
      classNames('someClass', { hovered: false, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('test with undefined mods and additional classes', () => {
    const expected = 'someClass class1 class2';
    expect(
      classNames('someClass', { hovered: false, scrollable: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });
});
