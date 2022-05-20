import { formatDate } from '../src/date';

describe('Test for keys', () => {
  it('should return keys of array', () => {
    expect(formatDate('yyyy-MM-dd', new Date(2022, 1, 25))).toEqual('2022-02-25');
  });

  it('should return keys of object', () => {
    expect(formatDate('yy-MM-dd', new Date(2022, 11, 30))).toEqual('22-12-30');
  });

  it('should return keys of object', () => {
    expect(formatDate('MM-dd', new Date(2022, 8, 16))).toEqual('09-16');
  });
});
