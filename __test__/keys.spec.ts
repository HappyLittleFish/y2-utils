import { keys } from '../src/object/keys';

describe('Test for keys', () => {
  it('should return keys of array', () => {
    expect(keys(['x', 'y', 'z'])).toEqual(['0', '1', '2']);
  });

  it('should return keys of object', () => {
    expect(keys({ a: 'x', b: 'y', c: 'z' })).toEqual(['a', 'b', 'c']);
  });

  it('should return keys of object', () => {
    expect(keys({ name: 'young', age: 18, sex: 'man' })).toEqual(['name', 'age', 'sex']);
  });
});
