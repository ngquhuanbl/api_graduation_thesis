const faker = require('faker');
const utils = require('../utils');
const labels = [
  {
    "id": 1,
    "name": "Fawkes the Phoenix",
    "color": "#c0392b",
    "tool": {
      "id": 1,
    },
  },
  {
    "id": 2,
    "name": "Basilisk",
    "color": "#218c74",
    "tool": {
      "id": 2,
    },
  },
  {
    "id": 3,
    "name": "Diricawl",
    "color": "#B33771",
    "tool": {
      "id": 2,
    },
  },
  {
    "id": 4,
    "name": "Niffler",
    "color": "#2C3A47",
    "tool": {
      "id": 4,
    },
  },
  {
    "id": 5,
    "name": "Billywig",
    "color": "#3B3B98",
    "tool": {
      "id": 1,
    },
  },
  {
    "id": 6,
    "name": "Mooncalf",
    "color": "#CAD3C8",
    "tool": {
      "id": 4,
    },
  },
  {
    "id": 7,
    "name": "Bowtruckle",
    "color": "#0be881",
    "tool": {
      "id": 4,
    },
  },
  {
    "id": 8,
    "name": "Demiguise",
    "color": "#d2dae2",
    "tool": {
      "id": 3,
    },
  },
  {
    "id": 9,
    "name": "Dung Beetle",
    "color": "#ffa801",
    "tool": {
      "id": 2,
    },
  },
];
module.exports = {
  getLabels: function() {
    return {
      "status": 1,
      "msg": null,
      "data": labels
    }
  }
}