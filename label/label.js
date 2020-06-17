const faker = require('faker');
const utils = require('../utils');
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
module.exports = {
  getLabels: function() {
    return {
      "status": 1,
      "msg": null,
      "data": labels
    }
  }
}