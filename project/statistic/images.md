# [PROJECT] Get **image** statistic data of the project

Get the image statistic data of a specific project __filtered by dataset__

The data includes:
* __Line chart data__: Number of images **n** corresponding to number of times **t** they were annotated
* __Donut chart data__: Number of the finised images and the unused ones

The data will be filtered by dataset (if required)

**Statistic URL**: `/members/`

**Full URL** : `/api/project/statistic/members/`
* Filtered by all dataset: `/api/project/statistic/members?project_id={project_id}`
* Filtered by a specific dataset: `/api/project/statistic/members?project_id={project_id}&dataset_id={dataset_id}`

**URL Parameters** : 
* `project_id=[number]` where `project_id` is the ID of the Project that needs the statistic data.
* `dataset_id=[number]` where `datasetID` is the ID of the Dataset that the statistic data will be filtered by.

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
    "line": [
      { "n": 750, "t": 0 },
      { "n": 1485, "t": 1 },
      { "n": 123, "t": 3 },
      { "n": 150, "t": 4 }
    ],
    "donut": [
      { "name": "Finished", "value": 1345 },
      { "name": "Unused", "value": 1163 }
    ]
  }
}
```

## Error Responses

**Condition** : If Project does not exist with `"id"` of prov"id"ed `"id"` parameter.

**Code** : `404 NOT FOUND`

**Content** : `{}`

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
