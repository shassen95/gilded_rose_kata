const gilded_rose = require('../src/gilded_rose');
const assert = require('assert');

describe("Gilded Rose", function() {

    it("should decrease sell_in from 10 to 9", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', 10, 20));     
        const updated_items = gilded_rose.update_quality(items);
        const item = updated_items[0];

        assert.equal(item.sell_in, 9);
    });

    it("should decrease quality from 20 to 19", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', 10, 20));     
        const updated_items = gilded_rose.update_quality(items);
        const item = updated_items[0];

        assert.equal(item.quality, 19);
    });

    it("should decrease sell_in from 1 to 0", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', 1, 20));     
        const updated_items = gilded_rose.update_quality(items);
        assert.equal(updated_items[0].sell_in, 0);
    });

    it("should decrease sell_in from 0 to -1", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', 0, 20));     
        const updated_items = gilded_rose.update_quality(items);
        assert.equal(updated_items[0].sell_in, -1);
    });

    it("should decrease quality from 20 to 18", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', 0, 20));     
        const updated_items = gilded_rose.update_quality(items);
        assert.equal(updated_items[0].quality, 18);
    });

    it("x", function() {   
        const items = [];

        items.push(new gilded_rose.Item('+5 Dexterity Vest', -1, 20));     
        const updated_items = gilded_rose.update_quality(items);
        assert.equal(updated_items, null);
    });

  
  });
  