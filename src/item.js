exports.Item = function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}
const constants = {
  QUALITY_CHANGE: 1,
  SELL_IN_CHANGE: 1
}
Object.freeze(constants); 
exports.constants = constants;

exports.is_legendary = (item) => get_item_type(item) == item_types.LEGENDARY;
exports.is_well_aged = (item) => get_item_type(item) == item_types.WELL_AGED;
exports.is_backstage_pass = (item) => get_item_type(item) == item_types.BACKSTAGE_PASS;
exports.get_quality_change_multiplier_for_backstage_pass = (item) => {
  const sell_in = item.sell_in;
  if (sell_in > 10){
    return 1;
  } else if (sell_in > 5){
    return 2;
  } else if (sell_in > 0){
    return 3;
  } else {
    return 0;
  }
}

const get_item_type = (item) => {
  const legendary = ['Sulfuras, Hand of Ragnaros'];
  if (legendary.includes(item.name)){
    return item_types.LEGENDARY;
  }

  const backstage_pass = ['Backstage passes to a TAFKAL80ETC concert'];
  if (backstage_pass.includes(item.name)){
    return item_types.BACKSTAGE_PASS;
  }
  const well_aged = ['Aged Brie'];
  if (well_aged.includes(item.name)){
    return item_types.WELL_AGED;
  }

  return item_types.STANDARD;
}
const item_types = {
  STANDARD: 0,
  LEGENDARY: 1,
  BACKSTAGE_PASS: 2,
  WELL_AGED: 3
}