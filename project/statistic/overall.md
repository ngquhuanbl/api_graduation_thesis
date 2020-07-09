# [PROJECT] Get overall project statistic data

Get the overall statistic data of a specific project.

The data includes the number of tasks belongs to each type of task (No activities - Annotated - Reviewed/Done)

**Path** : `{host}/pluto/api/v1/projects/{project_id}/stat/overall`

**URL Parameters** :

| Param | Type | Note |
|-------|------|------|
| host | string | host of service |
| project_id | number | ID of the project needing statistic | 

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
| status | Error Type | Note
|--------|------|----|
| -1 | BadRequest | Provided ID not match with any project. |
| -12xx | Execution Error | Error when execute request. |

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
