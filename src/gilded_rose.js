const item_utility = require('./item');

// var items = []

// items.push(new Item('+5 Dexterity Vest', 10, 20));
// items.push(new Item('Aged Brie', 2, 0));
// items.push(new Item('Elixir of the Mongoose', 5, 7));
// items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
// items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
// items.push(new Item('Conjured Mana Cake', 3, 6));
exports.update_quality = function(items){
  let updated_items = refresh_quality(items);
  return update_sell_in(updated_items);
}
const refresh_quality = (items) => {
  return items.map((item) => {
    let newItem = {...item};
    if (!item_utility.is_legendary(newItem)){
      if (quality_is_positive(newItem)){
        if (sell_by_date_is_in_the_future(newItem)){
          newItem = change_quality(newItem, -item_utility.constants.QUALITY_CHANGE);
        } else {
          newItem = change_quality(newItem, -2*item_utility.constants.QUALITY_CHANGE);
        } 
      }
    }
    return newItem;
  });
};
const update_sell_in = (items) => {
  return items.map((item) => {
    if (item_utility.is_legendary(item)){
      return change_sell_in(item, 0);
    } else {
      return change_sell_in(item, -item_utility.constants.SELL_IN_CHANGE);
    }
  });
};

const sell_by_date_is_in_the_future = (item) => item.sell_in > 0;
const quality_is_positive = (item) => item.quality > 0;
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