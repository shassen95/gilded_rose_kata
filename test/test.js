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
    });

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

        it("should not change quality when its 80", function() {   
            const items = [];

            items.push(new gilded_rose.Item('Sulfuras, Hand of Ragnaros', 50, 80)); 
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].quality, 80);
        });

        it("should not change quality when its 0 and sell_in is 50", function() {   
            const items = [];

            items.push(new gilded_rose.Item('Sulfuras, Hand of Ragnaros', 50, 0)); 
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].quality, 0);
        });

        it("should not change quality when its -30 and sell_in is 50", function() {   
            const items = [];

            items.push(new gilded_rose.Item('Sulfuras, Hand of Ragnaros', 50, -30)); 
            const updated_items = gilded_rose.update_quality(items);
            assert.equal(updated_items[0].quality, -30);
        });

    });

    describe("Backstage Pass Items", function(){
        describe("Sell-In", function(){

            it("should drop from 15 to 14 when quality is 20", function() {   
                const items = [];
    
                const sell_in = 15;
                const quality = 20;
                items.push(new gilded_rose.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });

            it("should drop from 1 to 0 while quality is 20", function() {   
                const items = [];
    
                const sell_in = 1;
                const quality = 20;
                items.push(new gilded_rose.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });

            it("should drop from 0 to -1 when quality is 20", function() {   
                const items = [];
    
                const sell_in = 0;
                const quality = 20;
                items.push(new gilded_rose.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });


            it("should drop from -1 to -2 when quality is 20", function() {   
                const items = [];
    
                const sell_in = -1;
                const quality = 20;
                items.push(new gilded_rose.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });

        });

        describe("Quality", function(){

            it("should increase from 20 to 21 when sell_in is 15", function() {   
                const items = [];
    
                const sell_in = 15;
                const quality = 20;
                items.push(new gilded_rose.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality+1);
            });

            it("should increase from 20 to 22 when sell_in is 9", function() {   
                const items = [];
    
                const sell_in = 9;
                const quality = 20;
                items.push(new gilded_rose.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality+2);
            });

            it("should increase from 20 to 23 when sell_in is 1", function() {   
                const items = [];
    
                const sell_in = 1;
                const quality = 20;
                items.push(new gilded_rose.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality+3);
            });

            it("should set be set to 0 from 20 when sell_in is 0", function() {   
                const items = [];
    
                const sell_in = 0;
                const quality = 20;
                items.push(new gilded_rose.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 0);
            });

        });
    });
});
  