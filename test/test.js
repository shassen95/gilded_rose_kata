const gilded_rose = require('../src/gilded_rose');
const gilded_rose_items = require('../src/item')
const assert = require('assert');

describe("Gilded Rose", function() {
    describe("Standard Items", function(){
        describe("Sell-In", function(){
            it("should decrease from 10 to 9 when quality is 20", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 10, 20));     
                const updated_items = gilded_rose.update_quality(items);
                const item = updated_items[0];
    
                assert.equal(item.sell_in, 9);
            });

            it("should decrease from 1 to 0 when quality is 20", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 1, 20));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, 0);
            });

            it("should decrease from 0 to -1 when quality is 20", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 0, 20));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, -1);
            });

            it("should decrease from -1 to -2 when quality is 20", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', -1, 20));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, -2);
            });

        });

        describe("Quality", function(){
            it("should decrease from 20 to 19 when sell_in is 10", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 10, 20));     
                const updated_items = gilded_rose.update_quality(items);
                const item = updated_items[0];
    
                assert.equal(item.quality, 19);
            });
    
            it("should decrease from 20 to 18 when sell_in is 0", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 0, 20));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 18);
            });
    
            it("should decreases from 20 to 18 when sell_in is -1", function() {   
                const items = [];
    
                const sell_in = -1;
                const quality = 20;
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', sell_in, quality));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality-2);
            });
    
            it("should decrease from 1 to 0 when sell_in is 10", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 10, 1));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 0);
            });
    
            it("should not change when it is 0 and when sell_in is 10", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 10, 0));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 0);
            });
    
            it("should not change when its -1 and when sell_in is 10", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 10, -1));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, -1);
            });
    
            it("should decrease from 51 to 50 when sell_in is 10", function() {   
                const items = [];
    
                items.push(new gilded_rose_items.Item('+5 Dexterity Vest', 10, 51));     
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 50);
            });
        });
    });

    describe("Legendary Items", function(){

        describe("Sell-In", function(){

            it("should not change when it is 0 and quality is 80", function() {   
                const items = [];

                items.push(new gilded_rose_items.Item('Sulfuras, Hand of Ragnaros', 0, 80)); 
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, 0);
            });

            it("should not change when its -1 and quality is 80", function() {   
                const items = [];

                items.push(new gilded_rose_items.Item('Sulfuras, Hand of Ragnaros', -1, 80)); 
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, -1);
            });

            it("should not change when its -50 and quality is 80", function() {   
                const items = [];

                items.push(new gilded_rose_items.Item('Sulfuras, Hand of Ragnaros', -50, 80)); 
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, -50);
            });

            it("should not change when its 50 and quality is 80", function() {   
                const items = [];

                items.push(new gilded_rose_items.Item('Sulfuras, Hand of Ragnaros', 50, 80)); 
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, 50);
            }); 
        });

        describe("Quality", function(){

            it("should not change when its 80 and sell_in is 50", function() {   
                const items = [];

                items.push(new gilded_rose_items.Item('Sulfuras, Hand of Ragnaros', 50, 80)); 
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 80);
            });

            it("should not change when its 0 and sell_in is 50", function() {   
                const items = [];

                items.push(new gilded_rose_items.Item('Sulfuras, Hand of Ragnaros', 50, 0)); 
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 0);
            });

            it("should not change when its -30 and sell_in is 50", function() {   
                const items = [];

                items.push(new gilded_rose_items.Item('Sulfuras, Hand of Ragnaros', 50, -30)); 
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, -30);
            });
        });

    });

    describe("Backstage Pass Items", function(){
        describe("Sell-In", function(){

            it("should drop from 15 to 14 when quality is 20", function() {   
                const items = [];
    
                const sell_in = 15;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });

            it("should drop from 1 to 0 while quality is 20", function() {   
                const items = [];
    
                const sell_in = 1;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });

            it("should drop from 0 to -1 when quality is 20", function() {   
                const items = [];
    
                const sell_in = 0;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });


            it("should drop from -1 to -2 when quality is 20", function() {   
                const items = [];
    
                const sell_in = -1;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });

        });

        describe("Quality", function(){

            it("should increase from 20 to 21 when sell_in is 15", function() {   
                const items = [];
    
                const sell_in = 15;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality+1);
            });

            it("should increase from 20 to 22 when sell_in is 9", function() {   
                const items = [];
    
                const sell_in = 9;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality+2);
            });

            it("should increase from 20 to 23 when sell_in is 1", function() {   
                const items = [];
    
                const sell_in = 1;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality+3);
            });

            it("should be set to 0 from 20 when sell_in is 0", function() {   
                const items = [];
    
                const sell_in = 0;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 0);
            });

            it("should be set to 0 from 20 when sell_in is -1", function() {   
                const items = [];
    
                const sell_in = -1;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Backstage passes to a TAFKAL80ETC concert', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, 0);
            });

        });
    });

    describe("Aged Brie", function(){
        describe("Sell-In", function() {

            it("should decrease from 2 to 1 when quality is 0", function() {   
                const items = [];

                const sell_in = 2;
                const quality = 0;
                items.push(new gilded_rose_items.Item('Aged Brie', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });

            it("should decrease from 1 to 0 when quality is 0", function() {   
                const items = [];

                const sell_in = 1;
                const quality = 0;
                items.push(new gilded_rose_items.Item('Aged Brie', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });

            it("should decrease from 0 to -1 when quality is 0", function() {   
                const items = [];

                const sell_in = 0;
                const quality = 0;
                items.push(new gilded_rose_items.Item('Aged Brie', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].sell_in, sell_in-1);
            });
        });

        describe("Quality", function(){
            it("should increase from 20 to 21 when sell_in is 1", function() {   
                const items = [];
    
                const sell_in = 1;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Aged Brie', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality+1);
            });

            it("x", function() {   
                const items = [];
    
                const sell_in = 0;
                const quality = 20;
                items.push(new gilded_rose_items.Item('Aged Brie', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items, null);
            });

            it("should increase from 25 to 27 when sell_in is -1", function() {   
                const items = [];
    
                const sell_in = -1;
                const quality = 25;
                items.push(new gilded_rose_items.Item('Aged Brie', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality+2);
            });

            it("should not change when its 50 and sell_in is 1", function() {   
                const items = [];
    
                const sell_in = 1;
                const quality = 50;
                items.push(new gilded_rose_items.Item('Aged Brie', sell_in, quality));
                const updated_items = gilded_rose.update_quality(items);
                assert.equal(updated_items[0].quality, quality);
            });
        })
    })
});
  