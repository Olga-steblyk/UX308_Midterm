import { richterscale} from '../earthquake.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let meow = richterscale(5);
      expect(meow).toBe("Some Damage");
    });
  });

  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let meow = richterscale(7);
      expect(meow).toBe("Disaster: buildings may collapse");
    });
  });
  describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let meow = richterscale(4);
      expect(meow).toBe("Little or no damage");
    });
  });

