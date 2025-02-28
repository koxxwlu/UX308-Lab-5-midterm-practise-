import { SlopeOfLine } from '../5SlopeOfLine.js'

describe("A suite of tests for 5SlopeOfLine.js", function () {
    it('test for slope of 5, 1, 3, 4', function () {
        let slope = SlopeOfLine(5, 1, 3, 4);
        // expect(slope).toEqual(0);
        expect(slope.toPrecision(2)).toBe('4.1');
    });
});
describe("A suite of tests for 5SlopeOfLine.js", function () {
    it('test for slope of 15, 17, -2, -15', function () {
        let slope = SlopeOfLine(15, 17, -2, -15);
        // expect(slope).toEqual(0);
        expect(slope.toPrecision(2)).toBe('13');
    });
});
describe("A suite of tests for 5SlopeOfLine.js", function () {
    it('test for slope of 5, 7, 1, -30', function () {
        let slope = SlopeOfLine(5, 7, 1, -30);
        // expect(slope).toEqual(0);
        expect(slope.toPrecision(2)).toBe('31');
    });
});