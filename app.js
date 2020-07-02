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

app.post('/api/login', function (req, res) {
  console.log('Login');
  console.log(req.body);
  const success = true;
  setTimeout(() => {
    if (success) {
      res.status(200).json({
        "status": 1,
        "data": {
          "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVlx1MDAxNcKbwoNUwoonbFPCu8KhwrYiLCJpYXQiOjE0NDQyNjI1NDMsImV4cCI6MTQ0NDI2MjU2M30.MldruS1PvZaRZIJR4legQaauQ3_DYKxxP2rFnD37Ip4",
          "refresh_token": "fdb8fdbecf1d03ce5e6125c067733c0d51de209c",
          "email": "iloveauth@example.com",
          "name": "Daniel Caesar",
        },
        "msg": "Success",
      })
    } else {
      res.status(200).json({
        "status": -1,
        "data": "",
        "msg": "Invalid email or password",
      })
    }
  }, 5000);
});

app.post('/api/signup', function (req, res) {
  console.log('Sign up');
  console.log(req.body);
  const success = true;
  setTimeout(() => {
    if (success) {
      res.status(200).json({
        "status": 1,
        "data": "",
        "msg": "Success",
      })
    } else {
      res.status(200).json({
        "status": -1,
        "data": "",
        "msg": "Failed to register user",
      })
    }
  }, 5000);
});

app.post('/api/check-email', function (req, res) {
  console.log('check-email');
  console.log(req.body);
  const success = false;
  setTimeout(() => {
    if (success) {
      res.status(200).json({
        "status": 1,
        "data": "",
        "msg": "Available email",
      })
    } else {
      res.status(401).json({
        "status": -1,
        "data": "",
        "msg": "Existed email",
      })
    }
  }, 100);
});

app.post('/api/forgot-password', function (req, res) {
  console.log('Forgot password');
  console.log(req.body);
  const success = false;
  setTimeout(() => {
    if (success) {
      res.status(200).json({
        "status": 1,
        "data": "",
        "msg": "Success",
      })
    } else {
      res.status(200).json({
        "status": -1,
        "data": "",
        "msg": "Invalid email",
      })
    }
  }, 5000);
});

app.post('/api/reset-password', function (req, res) {
  console.log('Reset password');
  console.log(req.body);
  const success = true;
  setTimeout(() => {
    if (success) {
      res.status(200).json({
        "status": 1,
        "data": "",
        "msg": "Success",
      })
    } else {
      res.status(200).json({
        "status": -1,
        "data": "",
        "msg": "Failed to reset password",
      })
    }
  }, 5000);
});

app.post('/api/refresh-token', function (req, res) {
  console.log('Refresh token');
  console.log(req.body);
  const success = true;
  setTimeout(() => {
    if (success) {
      res.status(200).json({
        "status": 1,
        "data": {
          "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiVlx1MDAxNcKbwoNUwoonbFPCu8KhwrYiLCJpYXQiOjE0NDQyNjI1NDMsImV4cCI6MTQ0NDI2MjU2M30.MldruS1PvZaRZIJR4legQaauQ3_DYKxxP2rFnD37Ip4",
        },
        "msg": "Success",
      })
    } else {
      res.status(200).json({
        "status": -1,
        "data": "",
        "msg": "Failed to reset password",
      })
    }
  }, 5000);
});

app.get('/api/project/statistic/overall', function (req, res) {
  console.log(req.query.project_id);
  res.json(projectStatisticDataGenerator.overall());
});

app.get('/api/project/statistic/members', function (req, res) {
  console.log(req.query.project_id);
  res.json(projectStatisticDataGenerator.members());
});

app.get('/api/project/statistic/images', function (req, res) {
  console.log(req.query.project_id);
  setTimeout(() => {
    res.json(projectStatisticDataGenerator.images());
  }, 5000)
});

app.get('/api/project/statistic/labels', function (req, res) {
  console.log(req.query);
  setTimeout(() => {
    res.json(projectStatisticDataGenerator.labels());
  }, 5000)
});

app.get('/api/dataset', function (req, res) {
  console.log(req.query);
  setTimeout(() => {
    res.json(datasetDataGenerator.getDatasets());
  }, 5000)
});

app.get('/api/label', function (req, res) {
  console.log(req.query.project_id);
  res.json(labelDataGenerator.getLabels());
});

app.get('/api/task/annotation-info', function(req, res) {
  const serverError = false
  console.log(req.query.id)
  setTimeout(() => {
    console.log(req.query.id);
    if (serverError) {
      res.status(200).json({
        "msg": "Server error",
        "status": -1,
      })
    } else {
      res.status(200).json(task.getAnnotationInfo())
    }
  }, 500)
})

app.get('/api/task/task-details', function(req, res) {
  const serverError = false
  console.log(req.query)
  setTimeout(() => {
    if (serverError) {
      res.status(200).json({
        "msg": "Server error",
        "status": -1,
      })
    } else {
      const { pg_no, pg_size } = req.query
      res.status(200).json(task.getTaskDetails(pg_no, pg_size))
    }
  }, 500)
})

app.get('/api/task/statistic', function(req, res) {
  const serverError = false
  setTimeout(() => {
    console.log(`Task Id: ${req.query.id}`);
    if (serverError) {
      res.status(200).json({
        "msg": "Server error",
        "status": -1,
      })
    } else {
      res.status(200).json(task.getStatistic())
    }
  })
})

app.post('/api/annotation/get-draft', function(req, res) {
  const serverError = false
  console.log(req.body.task)
  console.log(req.body.taskDetails)
  setTimeout(() => {
    if (serverError) {
      res.status(200).json({
        "msg": "Server error",
        "status": -1,
      })
    } else {
      res.status(200).json(annotate.getDraftData())
    }
  }, 1000)
})

app.post('/api/annotation/get-review', function(req, res) {
  const serverError = false
  console.log(req.body.task)
  console.log(req.body.taskDetails)
  setTimeout(() => {
    if (serverError) {
      res.status(200).json({
        "msg": "Server error",
        "status": -1,
      })
    } else {
      res.status(200).json(annotate.getReviewData())
    }
  }, 1000)
})

app.post('/api/annotation/result', function(req, res) {
  console.log('markingObjects:', req.body.markingObjects)
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