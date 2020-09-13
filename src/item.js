exports.Item = function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}
exports.is_legendary = (item) => get_item_type(item) == item_types.LEGENDARY;

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
}
const item_types = {
  STANDARD: 0,
  LEGENDARY: 1
}