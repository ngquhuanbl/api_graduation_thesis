const faker = require('faker');
const utils = require('../utils');
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

module.exports = {
  getAnnotationData: function() {
    return {
      "data": [
        // {
        //   "taskDetailID": "",
        //   "markingObjects": [
        //     {
        //       "labelID": "",
        //       "data": [],
        //     }
        //   ]
        // }
      ]
    }
  }
}