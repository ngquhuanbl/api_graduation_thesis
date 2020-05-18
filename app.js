const express = require('express');
var cors = require('cors')
const projectStatisticDataGenerator = require('./project/statistic');
const datasetDataGenerator = require('./dataset/dataset');
const labelDataGenerator = require('./label/label');

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/api/project/statistic/overall', function (req, res) {
  console.log(req.query);
  res.json(projectStatisticDataGenerator.overall());
});

app.get('/api/project/statistic/members', function (req, res) {
  console.log(req.query);
  res.json(projectStatisticDataGenerator.members());
});

app.get('/api/project/statistic/images', function (req, res) {
  console.log(req.query);
  res.json(projectStatisticDataGenerator.images());
});

app.get('/api/project/statistic/labels', function (req, res) {
  console.log(req.query);
  res.json(projectStatisticDataGenerator.labels());
});

app.get('/api/dataset', function (req, res) {
  console.log(req.query);
  res.json(datasetDataGenerator.getDatasets());
});

app.get('/api/label', function (req, res) {
  console.log(req.query);
  res.json(labelDataGenerator.getLabels());
});

const PORT = 3001;
app.listen(process.env.PORT || PORT, function () {
    console.log(`API running on port ${PORT}`);
})