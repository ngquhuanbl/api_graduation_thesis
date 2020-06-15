const faker = require('faker');
const utils = require('../utils')
const labels = [
  {
    "id": 1,
    "name": "Fawkes the Phoenix",
    "color": "#c0392b",
    "tool": "RECTANGLE",
  },
  {
    "id": 2,
    "name": "Basilisk",
    "color": "#218c74",
    "tool": "RECTANGLE",
  },
  {
    "id": 3,
    "name": "Diricawl",
    "color": "#B33771",
    "tool": "RECTANGLE",
  },
  {
    "id": 4,
    "name": "Niffler",
    "color": "#2C3A47",
    "tool": "POLYGON",
  },
  {
    "id": 5,
    "name": "Billywig",
    "color": "#3B3B98",
    "tool": "RECTANGLE",
  },
  {
    "id": 6,
    "name": "Mooncalf",
    "color": "#CAD3C8",
    "tool": "POLYGON",
  },
  {
    "id": 7,
    "name": "Bowtruckle",
    "color": "#0be881",
    "tool": "POLYGON",
  },
  {
    "id": 8,
    "name": "Demiguise",
    "color": "#d2dae2",
    "tool": "POLYLINE",
  },
  {
    "id": 9,
    "name": "Dung Beetle",
    "color": "#ffa801",
    "tool": "POINT",
  },
]
const random = require('random-words')
module.exports = {
  getAnnotationData: function() {
    const taskDetails = [];
    const n = utils.randomIntegerBetween(10, 30);
    // const n = utils.randomIntegerBetween(1, 10);
    const keywords = random({ exactly: n });
    for (let i = 0; i < n; i += 1) {
      taskDetails.push({
        "id": i + 1,
        "image": {
          "id": i + 1,
          "name": faker.random.words(),
          "url": `https://source.unsplash.com/featured/?${keywords[i]}`,
          "createdAt": 1587951804000,
          "updatedAt": 1587961894000,
        },
      });
    }
    // taskDetails.push({
    //   "id": 1,
    //   "image": {
    //     "id": 1,
    //     "name": faker.random.words(),
    //     "url": 'https://images.unsplash.com/photo-1591787823903-d6eca6b9a5a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    //     "width": 1500,
    //     "height": 1000,
    //   },
    // });
    return {
      "data": {
        "project": {
          "id": 1,
          "name": random({ exactly: 1, wordsPerString:2})[0],
        },
        "dataset": {
          "id": 1,
          "name": random({ exactly: 1, wordsPerString:2})[0],
        },
        "labels": labels,
        "taskDetails": taskDetails,
      }
    }
  },
  getStatistic: function() {
    const a = faker.random.number();
    const b = faker.random.number();
    return {
      "processed": (a < b) ? a : b,
      "total": (a > b) ? a : b,
    }
  }
}