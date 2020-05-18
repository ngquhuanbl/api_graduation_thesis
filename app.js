const express = require('express');
const projectStatisticDataGenerator = require('./project/statistic');
const datasetDataGenerator = require('./dataset/dataset');
const labelDataGenerator = require('./label/label');

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/project/statistic/overall', function (req, res) {
  console.log(req.query);
  res.json(projectStatisticDataGenerator.overall());
});

app.get('/project/statistic/members', function (req, res) {
  console.log(req.query);
  res.json(projectStatisticDataGenerator.members());
});

app.get('/project/statistic/images', function (req, res) {
  console.log(req.query);
  res.json(projectStatisticDataGenerator.images());
});

app.get('/project/statistic/labels', function (req, res) {
  console.log(req.query);
  res.json(projectStatisticDataGenerator.labels());
});

app.get('/dataset', function (req, res) {
  console.log(req.query);
  res.json(datasetDataGenerator.getDatasets());
});

app.get('/label', function (req, res) {
  console.log(req.query);
  res.json(labelDataGenerator.getLabels());
});




const PORT = 3001;
app.listen(PORT, function () {
    console.log(`API running on port ${PORT}`);
})