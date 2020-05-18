const faker = require('faker');
const utils = require('../utils');

module.exports = {
  getLabels: function() {
    const res = [];
    const n = utils.randomIntegerBetween(1, 30);
    for (let i = 0; i < n; i += 1 ) {
      res.push({
        "id": faker.random.uuid(),
        "name": faker.address.country(),
        "color": utils.getRandomColor(),
      });
    };
    return res;
  }
}