import {coinvalue} from '../coinvalue.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
        let nickels = 1, dimes = 2, quarters = 3, loonies = 4, toonies = 5; 
      let sHello = coinvalue(nickels,dimes,quarters,loonies,toonies);
      expect(sHello.toFixed(2)).toBe("15.00");
    });
  });

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
        let nickels = 0, dimes = 0, quarters = 0, loonies = 0, toonies = 0; 
        let sHello = coinvalue(nickels,dimes,quarters,loonies,toonies);
      expect(sHello.toFixed(2)).toBe("0.00");
    });
  });
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
        let nickels = 9, dimes = 8, quarters = 7, loonies = 6, toonies = 5; 
        let sHello = coinvalue(nickels,dimes,quarters,loonies,toonies);
      expect(sHello.toFixed(2)).toBe("35.00");
    });
  });