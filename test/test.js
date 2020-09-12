const gilded_rose = require('../src/gilded_rose');
const assert = require('assert');

describe("Gilded Rose", function() {

    it("x", function() {   
        var items = []

        items.push(new Item('+5 Dexterity Vest', 10, 20));     
        const updated_items = gilded_rose.update_quality(items);
        assert.equal(null, updated_items);
    });
  
  });
  