const faker = require('faker');
const utils = require('../utils');

module.exports = {
  getDatasets: function() {
    const res = [];
    const n = utils.randomIntegerBetween(1, 30);
    for (let i = 0; i < n; i += 1 ) {
      res.push({
        "id": faker.random.number(),
        "title": faker.commerce.productName(),
        "color": utils.getRandomColor(),
      });
    };
    return {
      "status": 1,
      "msg": null,
      "data": res,
    };
  }
}