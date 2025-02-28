import { IntegerTest } from '../4IntegerTest.js'

describe("A suite of tests for 4IntegerTest.js", function () {
  it('test for evenly divisible by 3', function () {
    let num = IntegerTest(90);
    expect(num).toEqual("Yee");
  });
});
describe("A suite of tests for 4IntegerTest.js", function () {
    it('test for evenly divisible by 7', function () {
      let num = IntegerTest(14);
      expect(num).toEqual("Ha");
    });
  });
  describe("A suite of tests for 4IntegerTest.js", function () {
    it('test for evenly divisible by both 3 & 7', function () {
      let num = IntegerTest(21);
      expect(num).toEqual("Yee Ha");
    });
  });
  describe("A suite of tests for 4IntegerTest.js", function () {
    it('test for evenly divisible by neither', function () {
      let num = IntegerTest(64);
      expect(num).toEqual("Nada");
    });
  });