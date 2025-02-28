import { MinuteToMow } from '../2MinuteToMow.js'

describe("A suite of tests for MinuteToMow.js", function () {
  it('tests for a function named hello that returns "hello"', function () {
    let min = MinuteToMow(5, 5, 5);
    expect(min).toEqual(5);
  });
});
describe("A suite of tests for MinuteToMow.js", function () {
    it('tests for a function named hello that returns "hello"', function () {
      let min = MinuteToMow(12, 19, 3);
      expect(min).toEqual(76);
    });
  });
  describe("A suite of tests for MinuteToMow.js", function () {
    it('tests for a function named hello that returns "hello"', function () {
      let min = MinuteToMow(62, 64, 2);
      expect(min).toEqual(1984);
    });
  });