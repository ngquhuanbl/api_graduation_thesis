# Get overall project statistic data

Get the overall statistic data of a specific project.

The data includes the number of tasks belongs to each type of task (No activities - Annotated - Reviewed/Done)

**Statistic URL**: `/overall?projectID={project_id}`

**Full URL** : `/api/project/statistic/overall?projectID={project_id}`

**URL Parameters** : `projectID=[number]` where `projectID` is the ID of the Project that needs the statistic data.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

The server responses with a result of:
* 9 no-activites tasks 
* 25 annotated tasks
* 16 reviewed/done tasks

```json
{
  "status": 1,
  "msg": null,
  "data": [
    { "name": "No activities", "value": 9 },
    { "name": "Annotated", "value": 25 },
    { "name": "Reviewed/Done", "value": 16 }
  ]
}
```

## Error Responses

**Condition** : If Project does not exist with `id` of provided `id` parameter.

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
