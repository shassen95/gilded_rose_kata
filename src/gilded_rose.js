const item_utility = require('./item');

// var items = []

// items.push(new Item('+5 Dexterity Vest', 10, 20));
// items.push(new Item('Aged Brie', 2, 0));
// items.push(new Item('Elixir of the Mongoose', 5, 7));
// items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
// items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
// items.push(new Item('Conjured Mana Cake', 3, 6));
exports.update_quality = function(items){
  const legendary_items = items.filter(item_utility.is_legendary);
  const non_legendary_items = items.filter((item) => !item_utility.is_legendary(item))
  const quality_updated_items = refresh_quality(non_legendary_items);
  const sell_in_updated_items = update_sell_in(quality_updated_items);

  return [...legendary_items, ...sell_in_updated_items];
}
const refresh_quality = (items) => {
  const backstage_pass_items = items
    .filter(item_utility.is_backstage_pass)
    .map(refresh_quality_backstage_pass);

  const well_aged_items = items
    .filter(item_utility.is_well_aged)
    .map(refresh_quality_well_aged);

  const conjured_items = items
    .filter(item_utility.is_conjured)
    .map(refresh_quality_conjured);

  const standard_items = items
    .filter(item_utility.is_standard)
    .map(refresh_quality_standard);
    
  return [...backstage_pass_items, ...well_aged_items, ...conjured_items, ...standard_items]
};

const refresh_quality_conjured = (item) => {
  return change_quality_wrapper(item, -2, quality_is_positive);
}
const refresh_quality_well_aged = (item) => {
  return change_quality_wrapper(item, 1, quality_can_be_improved);
}
const refresh_quality_standard = (item) => {
  return change_quality_wrapper(item, -1, quality_is_positive);
}
const change_quality_wrapper = (item, multiplier, filterFunction) => {
  let newItem = {...item};
  if (filterFunction(newItem)){
    newItem = change_quality_according_to_sell_in(newItem, multiplier);
  }
  return newItem;
}
const change_quality_according_to_sell_in = (item, multiplier) => {
  let newItem = {...item};
  if (sell_by_date_is_in_the_future(newItem)){
    newItem = change_quality(newItem, multiplier*item_utility.constants.QUALITY_CHANGE);
  } else {
    newItem = change_quality(newItem, 2*multiplier*item_utility.constants.QUALITY_CHANGE);
  } 
  return newItem;
}
const refresh_quality_backstage_pass = (item) => {
  let newItem = {...item};
  const multiplier = item_utility.get_quality_change_multiplier_for_backstage_pass(item);
  if (multiplier > 0){
    newItem = change_quality(newItem, multiplier*item_utility.constants.QUALITY_CHANGE);
  } else {
    newItem = change_quality(newItem, -newItem.quality);
  }
  if (quality_is_inflated(newItem)){
    newItem = change_quality(newItem, item_utility.constants.MAX_QUALITY-newItem.quality);
  }
  return newItem;
}
const sell_by_date_is_in_the_future = (item) => item.sell_in > 0;
const quality_is_positive = (item) => item.quality > 0;
const quality_can_be_improved = (item) => item.quality < item_utility.constants.MAX_QUALITY;
const quality_is_inflated = (item) => item.quality > item_utility.constants.MAX_QUALITY; 
const update_sell_in = (items) => {
  return items.map((item) => change_sell_in(item, -item_utility.constants.SELL_IN_CHANGE));
};
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