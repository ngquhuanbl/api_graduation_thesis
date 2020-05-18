# Get list of labels of a specific object

Get the list of labels that belongs to a project

**URL** : `/api/label&id={project_id}`

**URL Parameters** : `id=[string]` where `id` is the ID of the Project that the desired labels belong to

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "data": [
    { "id": "", "title": "All labels" },
    { "id": "1", "color": "#B71540", "title": "Dolphin" },
    { "id": "2", "color": "#38ADA9", "title": "Lighthouse" },
    { "id": "3", "color": "#F6B93B", "title": "Adventure Time" },
    { "id": "4", "color": "#0A3D62", "title": "Frog" },
    { "id": "5", "color": "#ff9f43", "title": "Lamborghini" },
    { "id": "6", "color": "#5f27cd", "title": "Speaker" },
    { "id": "7", "color": "#8395a7", "title": "Human" },
    { "id": "8", "color": "#01a3a4", "title": "Rock" }
  ]
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
{"detail": "You do not have permission to perform this action."}
```
