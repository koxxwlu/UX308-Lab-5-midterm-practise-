import { AirQualityIndex } from '../3AirQualityIndex.js'

describe("A suite of tests for 3AirQualityIndex.js", function () {
  it('test for good', function () {
    let num = AirQualityIndex(49);
    expect(num).toEqual("Good");
  });
});
describe("A suite of tests for 3AirQualityIndex.js", function () {
    it('test for moderate', function () {
      let num = AirQualityIndex(51);
      expect(num).toEqual("Moderate");
    });
  });
  describe("A suite of tests for 3AirQualityIndex.js", function () {
    it('test for Unhealthy for Sensitive Groups', function () {
      let num = AirQualityIndex(150);
      expect(num).toEqual("Unhealthy for Sensitive Groups");
    });
  });
  describe("A suite of tests for 3AirQualityIndex.js", function () {
    it('test for Unhealthy', function () {
      let num = AirQualityIndex(152);
      expect(num).toEqual("Unhealthy");
    });
  });
  describe("A suite of tests for 3AirQualityIndex.js", function () {
    it('test for Very Unhealthy', function () {
      let num = AirQualityIndex(300);
      expect(num).toEqual("Very Unhealthy");
    });
  });
  describe("A suite of tests for 3AirQualityIndex.js", function () {
    it('test for Hazardous', function () {
      let num = AirQualityIndex(954);
      expect(num).toEqual("Hazardous");
    });
  });
  describe("A suite of tests for 3AirQualityIndex.js", function () {
    it('test for error', function () {
      let num = AirQualityIndex(-52);
      expect(num).toEqual("Value Error");
    });
  });