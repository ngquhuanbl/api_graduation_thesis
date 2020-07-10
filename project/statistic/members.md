# [PROJECT] Get **member** statistic data of the project

Get the member statistic data of a specific project.

The data includes the number of workers belongs to each type of role (Labeller - Reviewer)

**Path** : `{host}/pluto/api/v1/projects/{project_id}/stat/members`

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
* 800000 labellers 
* 2000000 reviewers

```json
{
  "status": 1,
  "msg": null,
  "data": {
    "labellers": 800000,
    "reviewers": 2000000
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

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
  "status": 1,
  "data": null,
  "msg": "You do not have permission to perform this action.",
}
```
