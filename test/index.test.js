const assert = require('assert');
const utilFunction = require("../index");

describe('splitArray()', () => {
  it('throws an error if no "array" argument is supplied', () => {
    assert.throws(() => {
      utilFunction.splitArray();
    }, new Error(('No array argument supplied.')));
  });

  it('throws an error if no "count" argument is supplied', () => {
    assert.throws(() => {
      utilFunction.splitArray([1,2,3]);
    }, new Error(('No Count argument supplied')));
  });

  it('throws an error if "count" argument is less than 0', () => {
    assert.throws(() => {
      utilFunction.splitArray([1, 2, 3], -1);
    }, new Error(('Count is less than 0.')));
  });

  it('returns the original array split into chunks of the value of the "count" argument', () => {
    const actual = utilFunction.splitArray([1, 2, 3, 4, 5], 3);
    const expected = [[1, 2], [3, 4], [5]];
    assert.deepStrictEqual(expected, actual);
  });

  it('returns the original array split into chunks of the value of the "count" argument', () => {
    const actual = utilFunction.splitArray([1, 2, 3], 3);
    const expected = [[1], [2], [3]];
    assert.deepStrictEqual(expected, actual);
  });
});