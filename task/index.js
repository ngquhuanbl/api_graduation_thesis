const faker = require('faker');
const utils = require('../utils')
const labels = [
  {
    "id": 1,
    "name": "Fawkes the Phoenix",
    "color": "#c0392b",
    "tool": 1,
  },
  {
    "id": 2,
    "name": "Basilisk",
    "color": "#218c74",
    "tool": 1,
  },
  {
    "id": 3,
    "name": "Diricawl",
    "color": "#B33771",
    "tool": 1,
  },
  {
    "id": 4,
    "name": "Niffler",
    "color": "#2C3A47",
    "tool": 4,
  },
  {
    "id": 5,
    "name": "Billywig",
    "color": "#3B3B98",
    "tool": 1,
  },
  {
    "id": 6,
    "name": "Mooncalf",
    "color": "#CAD3C8",
    "tool": 4,
  },
  {
    "id": 7,
    "name": "Bowtruckle",
    "color": "#0be881",
    "tool": 4,
  },
  {
    "id": 8,
    "name": "Demiguise",
    "color": "#d2dae2",
    "tool": 3,
  },
  {
    "id": 9,
    "name": "Dung Beetle",
    "color": "#ffa801",
    "tool": 2,
  },
];
// const labels = [
//   {
//     "id": 1,
//     "name": "Fawkes the Phoenix",
//     "color": "#c0392b",
//     "tool": "RECTANGLE",
//   },
//   {
//     "id": 2,
//     "name": "Basilisk",
//     "color": "#218c74",
//     "tool": "RECTANGLE",
//   },
//   {
//     "id": 3,
//     "name": "Diricawl",
//     "color": "#B33771",
//     "tool": "RECTANGLE",
//   },
//   {
//     "id": 4,
//     "name": "Niffler",
//     "color": "#2C3A47",
//     "tool": "POLYGON",
//   },
//   {
//     "id": 5,
//     "name": "Billywig",
//     "color": "#3B3B98",
//     "tool": "RECTANGLE",
//   },
//   {
//     "id": 6,
//     "name": "Mooncalf",
//     "color": "#CAD3C8",
//     "tool": "POLYGON",
//   },
//   {
//     "id": 7,
//     "name": "Bowtruckle",
//     "color": "#0be881",
//     "tool": "POLYGON",
//   },
//   {
//     "id": 8,
//     "name": "Demiguise",
//     "color": "#d2dae2",
//     "tool": "POLYLINE",
//   },
//   {
//     "id": 9,
//     "name": "Dung Beetle",
//     "color": "#ffa801",
//     "tool": "POINT",
//   },
// ];
const random = require('random-words')
const fs = require('fs');
const rawdata = fs.readFileSync('taskDetails.json');
const db = JSON.parse(rawdata);
module.exports = {
  getAnnotationInfo: function() {
    return {
      "status": 1,
      "msg": null,
      "data": {
        "project": {
          "id": 1,
          "name": faker.name.findName(),
        },
        "dataset": {
          "id": 1,
          "name": faker.name.findName(),
        },
        "labels": labels,
      }
    }
  },
  getTaskDetails: function(pageNo, pageSize) {
    const taskDetails = [];
    // const n = utils.randomIntegerBetween(10, 30);
    // // const n = utils.randomIntegerBetween(1, 10);
    // const keywords = random({ exactly: n });
    // for (let i = 0; i < n; i += 1) {
    //   taskDetails.push({
    //     "id": i + 1,
    //     "image": {
    //       "id": i + 1,
    //       "name": faker.random.words(),
    //       "url": `https://source.unsplash.com/featured/?${keywords[i]}`,
    //       "createdAt": 1587951804000,
    //       "updatedAt": 1587961894000,
    //     },
    //   });
    // }
    const n = pageSize * pageNo;
    if (pageNo < 2) {
      for (let i = (pageNo - 1) * pageSize; i < n; i += 1) {
        const { id, author, download_url, width, height } = db[i];
        taskDetails.push({
          "id": parseInt(id),
          "image": {
            "id": parseInt(id),
            "name": author,
            "url": download_url,
            "width": width,
            "height": height,
            "updatedAt": new Date(faker.date.recent()).getTime(),
          }
        })
      }
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
      "status": 1,
      "msg": null,
      "data": taskDetails,
    }
  },
  getStatistic: function() {
    const a = faker.random.number();
    const b = faker.random.number();
    return {
      "status": 1,
      "msg": null,
      "data": {
        "processed": (a < b) ? a : b,
        "total": (a > b) ? a : b,
      }
    }
  }
}