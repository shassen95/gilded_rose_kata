const gilded_rose = require('../src/gilded_rose');
const assert = require('assert');

describe("Gilded Rose", function() {
    describe("Standard Items", function(){

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

        it("should decrease sell_in from -1 to -2", function() {   
            const items = [];

            items.push(new gilded_rose.Item('+5 Dexterity Vest', -1, 20));     
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].sell_in, -2);
        });

        it("should decrease quality to 0", function() {   
            const items = [];

            items.push(new gilded_rose.Item('+5 Dexterity Vest', 10, 1));     
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].quality, 0);
        });

        it("should not change the quality when it is 0", function() {   
            const items = [];

            items.push(new gilded_rose.Item('+5 Dexterity Vest', 10, 0));     
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].quality, 0);
        });

        it("should not change the quality when its -1", function() {   
            const items = [];

            items.push(new gilded_rose.Item('+5 Dexterity Vest', 10, -1));     
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].quality, -1);
        });

        it("should decrease the quality from 51 to 50", function() {   
            const items = [];

            items.push(new gilded_rose.Item('+5 Dexterity Vest', 10, 51));     
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].quality, 50);
        });
    })

    describe("Legendary Items", function(){

        it("should not change sell_in when it is 0", function() {   
            const items = [];

            items.push(new gilded_rose.Item('Sulfuras, Hand of Ragnaros', 0, 80)); 
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].sell_in, 0);
        });

        it("should not change sell_in when its -1", function() {   
            const items = [];

            items.push(new gilded_rose.Item('Sulfuras, Hand of Ragnaros', -1, 80)); 
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].sell_in, -1);
        });

        it("should not change sell_in when its -50", function() {   
            const items = [];

            items.push(new gilded_rose.Item('Sulfuras, Hand of Ragnaros', -50, 80)); 
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].sell_in, -50);
        });

        it("should not change sell_in when its 50", function() {   
            const items = [];

            items.push(new gilded_rose.Item('Sulfuras, Hand of Ragnaros', 50, 80)); 
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].sell_in, 50);
        });

        it("x", function() {   
            const items = [];

            items.push(new gilded_rose.Item('Sulfuras, Hand of Ragnaros', 50, 80)); 
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items, null);
        });

    })
});
  