# Get task info used for annotation

Get task info data used for annotation screen
The data includes:
- Project info
- Dataset info
- List of labels

**URL** : `/api/task/annotation-info?id={task_id}`

**URL Parameters** : `id=[number]` where `id` is the ID of the Task that the user is about to do (aka annotate)

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
  "data": {
    "project": {
      "id": "",
      "title": "",
    },
    "dataset": {
      "id": "",
      "title": "",
    },
    "labels": [
      {
        "id": "",
        "name": "",
        "tool": "",
        "color": "",
      }
    ],
  }
}
```

## Error Responses

**Condition** : Server error

**Code** : `500 SERVER ERROR`

**Content** :

```json
{
  "status": -1,
  "data": null,
  "msg": "Server error",
}
```
