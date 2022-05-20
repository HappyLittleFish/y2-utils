import { validateIdCard } from '../src/validate';

describe('Test for keys', () => {
  it('should return keys of array', () => {
    expect(validateIdCard('432219880808564')).toEqual(true);
    expect(validateIdCard('43223319880808563X')).toEqual(true);
    expect(validateIdCard('432219880808562348')).toEqual(true);
    expect(validateIdCard('43221988080856234')).toEqual(false);
    expect(validateIdCard('4322198808085623488')).toEqual(false);
  });
});
