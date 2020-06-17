# Get task info for 

Get data used for annotating of a task

**URL** : `/api/task/task-details?pg_no={page_number}&pg_size={page_size}&task={task_id}`

**URL Parameters** :
- `pg_no=[number]` where `pg_no` is the index of the current page
- `pg_size=[number]` where `pg_size` is the size of the page
- `task=[number]` where `task` is the ID of the task

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
