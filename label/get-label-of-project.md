# Get labels of a project

Get the list of labels that belongs to a project

**URL** : `/api/labels?project_id={project_id}`

**URL Parameters** : `project_id=[number]` where `project_id` is the ID of the Project that the desired labels belong to

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "status": 1,
  "msg": null,
  "data": [
    { "id": 1, "color": "#B71540", "name": "Dolphin", "tool": 1 },
    { "id": 2, "color": "#38ADA9", "name": "Lighthouse", "tool": 2 },
    { "id": 3, "color": "#F6B93B", "name": "Adventure Time", "tool": 2 },
    { "id": 4, "color": "#0A3D62", "name": "Frog", "tool": 1 },
    { "id": 5, "color": "#ff9f43", "name": "Lamborghini", "tool": 3 },
    { "id": 6, "color": "#5f27cd", "name": "Speaker", "tool": 1 },
    { "id": 7, "color": "#8395a7", "name": "Human", "tool": 3 },
    { "id": 8, "color": "#01a3a4", "name": "Rock", "tool": 4 }
  ]
}
```

## Error Responses

**Condition** : If Project does not exist with `"id"` of provided `"id"` parameter.

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
  "msg": "You do not have permission to perform this action."
}
```
