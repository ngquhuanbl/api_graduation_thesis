const express = require('express');
var cors = require('cors')
const projectStatisticDataGenerator = require('./project/statistic');
const datasetDataGenerator = require('./dataset/dataset');
const labelDataGenerator = require('./label/label');
const task = require('./task')
const annotate = require('./annotate')

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

app.get('/api/task', function(req, res) {
  const serverError = false
  console.log(req.query.id)
  setTimeout(() => {
    console.log(req.query.id);
    if (serverError) {
      res.status(500).json({
        "detail": "Server error",
      })
    } else {
      res.status(200).json(task.getAnnotationData())
    }
  }, 5000)
})

app.get('/api/task/statistic', function(req, res) {
  const serverError = false
  setTimeout(() => {
    console.log(`Task Id: ${req.query.id}`);
    if (serverError) {
      res.status(500).json({
        "detail": "Server error",
      })
    } else {
      res.status(200).json(task.getStatistic())
    }
  })
})

app.get('/api/annotation/draft', function(req, res) {
  const serverError = false
  console.log(req.query.id)
  setTimeout(() => {
    if (serverError) {
      res.status(500).json({
        "detail": "Server error",
      })
    } else {
      res.status(200).json(annotate.getDraftData())
    }
  }, 1000)
})

app.get('/api/annotation/review', function(req, res) {
  const serverError = false
  console.log(req.query.id)
  setTimeout(() => {
    if (serverError) {
      res.status(500).json({
        "detail": "Server error",
      })
    } else {
      res.status(200).json(annotate.getReviewData())
    }
  }, 1000)
})

app.post('/api/annotation/result', function(req, res) {
  console.log(req.body.markingObjects[0])
  console.log(req.body.markingObjects[0].data)
  setTimeout(() => {
    res.status(200).json({
      "status": 1,
      "data": null,
      "msg": "Khởi tạo thành công",
    })
    // res.status(200).json({
    //   "status": 0,
    //   "data": null,
    //   "msg": "Mother comes home",
    // })
    // res.status(500).end()
  }, 5000)
})
app.post('/api/annotation/draft', function(req, res) {
  const { markingObjects } = req.body
  console.log(req.body)
  console.log('--------------------------')
  markingObjects.forEach((obj, index) => {
    console.log(obj.tool)
    console.log(obj.data)
    console.log('--------------------------')
  })
  setTimeout(() => {
    res.status(200).json({
      "status": 1,
      "data": null,
      "msg": "Khởi tạo thành công",
    })
    // res.status(200).json({
    //   "status": 0,
    //   "data": null,
    //   "msg": "Mother comes home",
    // })
    // res.status(500).end()
  }, 5000)
})

app.post('/api/annotation/review', function(req, res) {
  console.log(req.body)
  setTimeout(() => {
    // res.status(200).json({
    //   "status": 1,
    //   "data": null,
    //   "msg": "Khởi tạo thành công",
    // })
    // res.status(200).json({
    //   "status": 0,
    //   "data": null,
    //   "msg": "Mother comes home",
    // })
    res.status(500).end()
  }, 5000)
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log(`API running on port ${PORT}`);
})