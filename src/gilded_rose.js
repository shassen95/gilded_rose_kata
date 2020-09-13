const QUALITY_CHANGE = 1;
const SELL_IN_CHANGE = 1;
exports.Item = function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

// var items = []

// items.push(new Item('+5 Dexterity Vest', 10, 20));
// items.push(new Item('Aged Brie', 2, 0));
// items.push(new Item('Elixir of the Mongoose', 5, 7));
// items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
// items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
// items.push(new Item('Conjured Mana Cake', 3, 6));
exports.update_quality = function(items){
  return items.map((item) => {
    let newItem = {...item};
    if (newItem.quality > 0){
      if (newItem.sell_in <= 0){
        newItem = change_quality(newItem, -2*QUALITY_CHANGE);
      } else {
        newItem = change_quality(newItem, -QUALITY_CHANGE);
      } 
    }
    newItem = change_sell_in(newItem, -SELL_IN_CHANGE);
    return newItem;
  });
}
const change_sell_in = (item, sell_in_change) => {
  const newItem = {...item};
  newItem.sell_in += sell_in_change;
  return newItem;
};
const change_quality = (item, quality_change) => {
  const newItem = {...item};
  newItem.quality += quality_change;
  return newItem;
};
exports.update_quality_old = function update_quality(items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
  return items;
}