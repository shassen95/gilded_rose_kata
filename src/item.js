exports.Item = function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}
exports.is_legendary = (item) => get_item_type(item) == item_types.LEGENDARY;
exports.is_backstage_pass = (item) => get_item_type(item) == item_types.BACKSTAGE_PASS;

const constants = {
  QUALITY_CHANGE: 1,
  SELL_IN_CHANGE: 1
}
Object.freeze(constants); 
exports.constants = constants;

const get_item_type = (item) => {
  const legendary = ['Sulfuras, Hand of Ragnaros'];
  if (legendary.includes(item.name)){
    return item_types.LEGENDARY;
  }

  const backstage_pass = ['Backstage passes to a TAFKAL80ETC concert'];
  if (backstage_pass.includes(item.name)){
    return item_types.BACKSTAGE_PASS;
  }

  return item_types.STANDARD;
}
const item_types = {
  STANDARD: 0,
  LEGENDARY: 1,
  BACKSTAGE_PASS: 2
}