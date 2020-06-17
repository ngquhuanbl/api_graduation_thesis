# RESTful API Specification
Designed for ***HCMUS Image Annotation***, a graduation project of Shiba Team, HCM Universiry of Sciences, Vietnam, 2020

---
## **KHANG SERVER**
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

* [Get dataset](dataset/get-dataset-of-project.md) : `GET /api/dataset?project_id={project_id}`

### Label 

Endpoints for viewing and manipulating the Projects that the Authenticated User has permissions to access:

* [Get labels of a project](label/get-label-of-project.md) : `GET /api/dataset?project_id={project_id}`

### Task

Endpoints for viewing and manipulating the Tasks that the Authenticated User has permissions to access:

* [Get task details](task/get-task-details.md) : `GET /api/task/task-details?pg_no={page_number}&pg_size={page_size}&task={task_id}`

* [Get statistic data ](task/statistic.md) : `GET /api/task/statistic?id={task_id}`

---
## **HƯNG SERVER**

## Open Endpoints

Open endpoints require no Authentication.


## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Annotate

Endpoints for annotating that the Authenticated User has permissions to access:

* [Get DRAFT data](annotate/get-draft-data.md) : `POST /api/annotate/draft`

* [Get REVIEW data](annotate/get-review-data.md) : `POST /api/annotate/review`

