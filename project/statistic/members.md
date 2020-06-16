# Get **member** statistic data of the project

Get the member statistic data of a specific project.

The data includes the number of workers belongs to each type of role (Labeller - Reviewer)

**Statistic URL**: `/members?projectID={project_id}`

**Full URL** : `/api/project/statistic/members?projectID={project_id}`

**URL Parameters** : `projectID=[number]` where `projectID` is the ID of the Project that needs the statistic data.

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
  "data": {
    "labellers": 800000,
    "reviewers": 2000000
  }
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
{"detail": "You do not have permission to perform this action."}
```
