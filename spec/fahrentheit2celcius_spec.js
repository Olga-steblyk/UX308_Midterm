import { fahr2cel } from '../fahrenheit2celcius.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let result = fahr2cel(0);
      expect(result.toFixed(2)).toBe(`-17.78`);
    });
  });

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let result = fahr2cel(212);
      expect(result.toFixed(2)).toBe(`100.00`);
    });
  });
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let result = fahr2cel(70);
      expect(result.toFixed(2)).toBe(`21.11`);
    });
  });