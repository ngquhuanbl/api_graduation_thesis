# Get statistic data of a task

Get data used for making task statistic

The data includes the number of images being processed (annotated for labeling task and reviewed for reviewing task) and total amount of images of the task


**URL** : `/api/task/statistic/id={task_id}`

**URL Parameters** : `id=[number]` where `id` is the ID of the Task that needs the statistic data.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

The server responses with a result of:
* 81 processed images
* 116 is the total amount of images of the task

```json
{
  "status": 1,
  "msg": null,
  "data": {
    "processed": 81,
    "total": 116,
  }
}
```

## Error Responses

**Condition** : If Task does not exist with `id` of provided `id` parameter.

**Code** : `404 NOT FOUND`

**Content** : `{}`

### Or

**Condition** : If Project exists but Authorized User does not have required
permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
  "status": -1,
  "data": null,
  "msg": "You do not have permission to perform this action.",
}
```
