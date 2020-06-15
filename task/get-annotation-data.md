# Get data used for annotating of a task

Get data used for annotating of a task

**URL** : `/api/task?id={taskid}`

**URL Parameters** : `id=[number]` where `id` is the ID of the Task that the user is about to do (aka annotate)

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
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
    "taskDetails": [
      {
        "id": "",
        "image": {
          "id": "",
          "name": "",
          "url": "",
          "width": 1690,
          "height": 900,
        },
      }
    ]
  }
}
```

## Error Responses

**Condition** : Server error

**Code** : `500 SERVER ERROR`

**Content** :

```json
{ "detail": "Server error" }
```
