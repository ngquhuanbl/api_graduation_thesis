# Get datasets

Get the list of datasets that belongs to a project

**URL** : `/api/dataset?id={project_id}`

**URL Parameters** : `id=[number]` where `id` is the ID of the Project that the desired datasets belong to

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
    { "id": 1, "color": "#B71540", "title": "Tokyo, Japan" },
    { "id": 2, "color": "#38ADA9", "title": "Village in Ha Giang" },
    { "id": 3, "color": "#F6B93B", "title": "African animal" },
    { "id": 4, "color": "#0A3D62", "title": "BMW" },
    { "id": 5, "color": "#ff9f43", "title": "Orange" },
    { "id": 6, "color": "#5f27cd", "title": "NASA" },
    { "id": 7, "color": "#8395a7", "title": "Comet" },
    { "id": 8, "color": "#01a3a4", "title": "Body of water" },
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
{
  "status": -1,
  "data": null,
  "msg": "You do not have permission to perform this action.",
}
```
