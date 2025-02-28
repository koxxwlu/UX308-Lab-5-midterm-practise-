import { SqftToAcres } from '../1SqftToAcres.js'

describe("A suite of tests for feetToAcres.js", function () {
  it('tests for a function named hello that returns "hello"', function () {
    let sqft = SqftToAcres(43560);
    expect(sqft).toEqual(1);
  });
});
describe("A suite of tests for feetToAcres.js", function () {
  it('tests for a function named hello that returns "hello"', function () {
    let sqft = SqftToAcres(152460);
    expect(sqft).toEqual(3.5);
  });
});
describe("A suite of tests for feetToAcres.js", function () {
  it('tests for a function named hello that returns "hello"', function () {
    let sqft = SqftToAcres(2295612);
    expect(sqft).toEqual(52.7);
  });
});