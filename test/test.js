const gilded_rose = require('../src/gilded_rose');
const assert = require('assert');

describe("Gilded Rose", function() {

    it("should decrease sell_in by 1", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', 10, 20));     
        const updated_items = gilded_rose.update_quality(items);
        const item = updated_items[0];

        assert.equal(item.sell_in, 9);
    });

    it("should decrease quality by 1", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', 10, 20));     
        const updated_items = gilded_rose.update_quality(items);
        const item = updated_items[0];

        assert.equal(item.quality, 19);
    });

    it("x", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', 1, 20));     
        const updated_items = gilded_rose.update_quality(items);
        assert.equal(updated_items, null);
    });


  
  });
  