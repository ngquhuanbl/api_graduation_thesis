const faker = require('faker');
const utils = require('../utils');
module.exports = {
  overall: function() {
    return {
      "data": [
        { "name": "No activities", "value": faker.random.number() },
        { "name": "Annotated", "value": faker.random.number() },
        { "name": "Reviewed/Done", "value": faker.random.number() },
      ]
    };
  },
  members: function() {
    return {
      "data": {
        "labellers": faker.random.number(),
        "reviewers": faker.random.number()
      }
    };
  },
  images: function() {
    const n = utils.randomIntegerBetween(1, 30);
    const line = [];
    for (let i = 0; i < n; i += 1) {
      line.push({ "n": faker.random.number(), "t": i });
    }
    const donut = [
      { "name": "Finished", "value": faker.random.number() },
      { "name": "Unused", "value": faker.random.number() }
    ];
    return {
      "data": {
        "line": line,
        "donut": donut,
      }
    }
  },
  labels: function() {
    return {
      "data": {
        "n": faker.random.number(),
        "donut": [
          { "name": "Have the label", "value": faker.random.number() },
          { "name": "Don't have the label", "value": faker.random.number() }
        ]
      }
    }
  }
}
