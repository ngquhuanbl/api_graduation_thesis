# RESTful API Specification
Designed for ***HCMUS Image Annotation***, a graduation project of Shiba Team, HCM Universiry of Sciences, Vietnam, 2020

## Open Endpoints

Open endpoints require no Authentication.

* [Login](login.md) : `POST /api/login/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Project 

Endpoints for viewing and manipulating the Projects that the Authenticated User has permissions to access:

* [Statistic](project/statistic.md) : `GET /api/project/statistic/`

### Dataset 

Endpoints for viewing and manipulating the Projects that the Authenticated User has permissions to access:

* [Get list of datasets of a project](dataset/get-dataset-of-project.md) : `GET /api/dataset?projectID={project_id}`

### Label 

Endpoints for viewing and manipulating the Projects that the Authenticated User has permissions to access:

* [Get list of labels of a project](label/get-label-of-project.md) : `GET /api/dataset?projectID={project_id}`

### Task

Endpoints for viewing and manipulating the Tasks that the Authenticated User has permissions to access:

* [Get data used for annotating of a task](task/get-annotation-data.md) : `GET /api/task?id={task_id}`

### Annotate

Endpoints for annotating that the Authenticated User has permissions to access:

* [Get data used for annotating of a task (Annotation server)](annotate/get-annotation-data.md) : `GET /api/annotate?id={task_id}`



