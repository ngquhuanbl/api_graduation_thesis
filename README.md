# RESTful API Specification
Designed for ***HCMUS Image Annotation***, a graduation project of Shiba Team, HCM Universiry of Sciences, Vietnam, 2020

---
## **KHANG SERVER**
**Notice:** Structure of response should always has **status** and **msg**
```json
{
    "status": 1,
    "msg": "success",
    "data": { // this field will be ommitted if not needed
        // something
    }
}
```

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### I. Project 

Endpoints for viewing and manipulating the Projects that the Authenticated User has permissions to access:

* [Statistic](project/statistic.md) : `GET /api/project/statistic/`

#### 1. Create Project
Endpoint: POST {host}/pluto/api/v1/projects

Params: `body/x-www-form-urlencoded` 

| Param | Type | Note|
|-------|------|-----|
| title | string | - |
| description | string | - | 
| workspace_id | number | Workspace that the project belongs to |

Response Data: none

#### 2. Get Project Detail

Endpoint: GET {host}/pluto/api/v1/projects/{id}

Params: `path params` 

| Param | Type | Note|
|-------|------|-----|
| id | number | id of the project |

Response Data:

```json
{
    "id": 1,
    "title": "Faster R-CNN Test Project",
    "description": "Test new algorithm",
    "dataset_count": 5,
    "member_count": 12
}
```

#### 3. Get Projects By WorkspaceID

Endpoint: GET {host}/pluto/api/v1/projects

Params: `query` 

| Param | Type | Note|
|-------|------|-----|
| workspace_id | number | id of the workspace |
| page | number | - |
| page_size | number | - |

Response Data:

```json
[
    {
        "id": 1,
        "title": "Faster R-CNN Test Project",
        "description": "Test new algorithm",
        "dataset_count": 5,
        "member_count": 12
    },
    {
        "id": 4,
        "title": "Test Project Without Algorithm",
        "description": "",
        "dataset_count": 5,
        "member_count": 12
    }
]
```

### II. Dataset
#### 1. Create Dataset

Endpoint: POST {host}/pluto/api/v1/datasets

Params: `body/x-www-form-urlencoded` 

| Param | Type | Note|
|-------|------|-----|
| title | string | - |
| description | string | - | 
| project_id| number | Project that the dataset belongs to |

Response Data: none

#### 2. Get Dataset Detail

Endpoint: GET {host}/pluto/api/v1/datasets/{id}

Params: `path params` 

| Param | Type | Note|
|-------|------|-----|
| id | number | id of the dataset |

Response Data:

```json
{
    "id": 2434,
    "title": "Cars",
    "description": "Images of cars",
    "project_id":421 
}
```
#### 3. Get Dataset By ProjectID

Endpoint: GET {host}/pluto/api/v1/datasets

Params: `query` 

| Param | Type | Note|
|-------|------|-----|
| project_id | number | id of the project |


Example: `{host}/pluto/api/v1/datasets?project_id=2` 

Response Data:

```json
[
    {
        "id": 1,
        "title": "Faster R-CNN Test Project",
        "description": "Test new algorithm",
        "dataset_count": 5,
        "member_count": 12
    },
    {
        "id": 4,
        "title": "Test Project Without Algorithm",
        "description": "",
        "dataset_count": 5,
        "member_count": 12
    }
]
```

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
* [Login](login.md) : `POST /api/login/`

## Endpoints that require Authentication

Closed endpoints require a valid Token to be included in the header of the
request. A Token can be acquired from the Login view above.

### Annotate

Endpoints for annotating that the Authenticated User has permissions to access:

* [Get DRAFT data](annotate/get-draft-data.md) : `POST /api/annotate/draft`

* [Get REVIEW data](annotate/get-review-data.md) : `POST /api/annotate/review`

