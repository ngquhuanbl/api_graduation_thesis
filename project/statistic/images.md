# [PROJECT] Get **image** statistic data of the project

Get the image statistic data of a specific project __filtered by dataset__

The data includes:
* __Line chart data__: Number of images **n** corresponding to number of times **t** they were annotated
* __Donut chart data__: Number of the finised images and the unused ones

The data will be filtered by dataset (if required)

**Path** : `{host}/pluto/api/v1/projects/{project_id}/stat/images`

**URL Parameters** :

| Param | Type | Note |
|-------|------|------|
| host | string | host of service |
| project_id | number | ID of the project needing statistic | 

**Query:**

| Param | Type | Note |
|-------|------|------|
| dataset_id | number | ID of the dataset needing statisctic |



**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

The server responses with a result of:
* Line chart data:
  * 750 images not being annotated
  * 1485 images being annotated once
  * 123 images being annotated 3 times
  * 150 images being annotated 4 times
* Donut chart data:
  * 1345 finished images
  * 523 unused images

```json
{
  "status": 1,
  "msg": null,
  "data": {
    "annotated_times": [
      { "count": 750, "times": 0 },
      { "count": 1485, "times": 1 },
      { "count": 123, "times": 3 },
      { "count": 150, "times": 4 }
    ],
    "annotated_status": [
      { "name": "Finished", "value": 1345 },
      { "name": "Unused", "value": 1163 }
    ]
  }
}
```

## Error Responses

| status | Error Type | Note
|--------|------|----|
| -1 | BadRequest | Provided ID not match with any project. |
| -12xx | Execution Error | Error when execute request. |

### Or

**Condition** : If Project exists but Authorized User does not have required
permissions.

**Code** : `403 FORB"id"DEN`

**Content** :

```json
{
  "status": 1,
  "data": null,
  "msg": "You do not have permission to perform this action."
}
```
