import { height2volume } from '../cubevolume.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let sHello = height2volume(7);
      expect(sHello.toFixed(2)).toBe(`343.00`);
    });
  });
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let sHello = height2volume(12);
      expect(sHello.toFixed(2)).toBe(`1728.00`);
    });
  });
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let sHello = height2volume(4);
      expect(sHello.toFixed(2)).toBe(`64.00`);
    });
  });
  