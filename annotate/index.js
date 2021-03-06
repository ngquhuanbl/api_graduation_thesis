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
  getDraftData: function() {
    return {
      "status": 1,
      "msg": null,
      "data": [
        // {
        //   "task": 1234,
        //   "taskDetail": 1,
        //   "image": 1,
        //   "markingObjects": [
        //     {
        //       "tool": 5,
        //       "data": { 
        //         "exterior":[
        //           { x: 121.35278514588859, y: 131.2127236580517 },
        //           { x: 1044.4297082228118, y: 660.0397614314115 }
        //         ],
        //        "interior": [],
        //        "bitmap": null },
        //     },
        //     {
        //       "tool": 9,
        //       "data": { "exterior": [ { "x": 188.9920424403183, "y": 819.0854870775348 } ],
        //       "interior": [],
        //       "bitmap": null },
        //     },
        //     {
        //       "tool": 9,
        //       "data": { "exterior": [ { "x": 248.6737400530504, "y": 908.5487077534791 } ],
        //       "interior": [],
        //       "bitmap": null },
        //     },
        //     {
        //       "tool": 9,
        //       "data": { "exterior": [ { "x": 370.026525198939, "y": 823.0616302186879 } ],
        //       "interior": [],
        //       "bitmap": null },
        //     },
        //     {
        //       "tool": 9,
        //       "data": { "exterior": [ { "x": 372.0159151193634, "y": 811.1332007952286 } ],
        //       "interior": [],
        //       "bitmap": null },
        //     },
        //     {
        //       "tool": 9,
        //       "data": { "exterior": [ { "x": 274.53580901856765, "y": 717.6938369781312 } ],
        //       "interior": [],
        //       "bitmap": null },
        //     },
        //     {
        //       "tool": 9,
        //       "data": { "exterior": [ { "x": 226.79045092838197, "y": 717.6938369781312 } ],
        //       "interior": [],
        //       "bitmap": null },
        //     },
        //     {
        //       "tool": 9,
        //       "data": { "exterior": [ { "x": 270.55702917771885, "y": 829.0258449304175 } ],
        //       "interior": [],
        //       "bitmap": null },
        //     },
        //     {
        //       "tool": 8,
        //       "data": { "exterior":
        //         [ { "x": 519.2307692307693, "y": 866.7992047713718 },
        //           { "x": 708.2228116710876, "y": 769.3836978131212 },
        //           { "x": 992.7055702917772, "y": 793.2405566600397 },
        //           { "x": 1052.3872679045094, "y": 844.9304174950298 },
        //           { "x": 1193.6339522546418, "y": 707.7534791252485 },
        //           { "x": 1197.6127320954906, "y": 634.1948310139165 },
        //           { "x": 1135.9416445623342, "y": 467.19681908548705 },
        //           { "x": 1167.7718832891246, "y": 373.75745526838966 },
        //           { "x": 1187.6657824933686, "y": 254.47316103379723 },
        //           { "x": 1145.8885941644562, "y": 178.92644135188866 },
        //           { "x": 1094.1644562334218, "y": 115.30815109343936 },
        //           { "x": 1088.1962864721486, "y": 91.45129224652088 },
        //           { "x": 1036.4721485411142, "y": 63.618290258449306 },
        //           { "x": 893.2360742705571, "y": 67.59443339960238 },
        //           { "x": 767.9045092838196, "y": 79.52286282306163 },
        //           { "x": 606.7639257294429, "y": 105.36779324055667 },
        //           { "x": 495.3580901856764, "y": 109.34393638170974 },
        //           { "x": 397.8779840848806, "y": 65.60636182902584 },
        //           { "x": 296.41909814323606, "y": 43.737574552683895 },
        //           { "x": 208.88594164456234, "y": 41.74950298210736 },
        //           { "x": 163.12997347480106, "y": 49.70178926441352 } ],
        //        "interior": [],
        //        "bitmap": null },
        //     },
        //     {
        //       "tool": 4,
        //       "data": { "exterior":
        //         [ { "x": 1167.7718832891246, "y": 83.49900596421472 },
        //           { "x": 1388.5941644562333, "y": 79.52286282306163 },
        //           { "x": 1424.4031830238728, "y": 200.7952286282306 },
        //           { "x": 1484.0848806366048, "y": 489.065606361829 },
        //           { "x": 1458.2228116710876, "y": 624.2544731610338 },
        //           { "x": 1418.4350132625996, "y": 709.741550695825 },
        //           { "x": 1328.9124668435013, "y": 538.7673956262425 },
        //           { "x": 1245.3580901856765, "y": 306.16302186878727 } ],
        //        "interior": [],
        //        "bitmap": null },
        //     },
        //     {
        //       "tool": 7,
        //       "data": { "exterior":
        //         [ { "x": 966.8435013262599, "y": 914.5129224652087 },
        //           { "x": 1169.761273209549, "y": 882.7037773359841 },
        //           { "x": 1332.89124668435, "y": 727.6341948310139 },
        //           { "x": 1279.1777188328913, "y": 630.2186878727634 },
        //           { "x": 1416.4456233421752, "y": 817.0974155069582 },
        //           { "x": 1360.7427055702917, "y": 894.6322067594433 },
        //           { "x": 1135.9416445623342, "y": 976.1431411530815 } ],
        //        "interior": [],
        //        "bitmap": null },
        //     },
        //   ]
        // }
      ]
    }
  },
  getReviewData: function() {
    return {
      "status": 1,
      "msg": null,
      "data": [

      ]
    }
  }
}