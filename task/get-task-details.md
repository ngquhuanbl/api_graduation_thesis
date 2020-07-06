# Get task details

Get the list of task details belongs to a task

Each element of the list includes:
- Task detail ID
- Corresponding image data (ID, name, url, width, height, updated date)



**URL** : `{host}/pluto/api/v1/tasks/:task_id/details?page={page_number}&page_size={page_size}`

**URL Parameters** :
- `task_id=[number]` where `task_id` is the ID of the task
- `page=[number]` where `page` is the index of the current page
- `page_size=[number]` where `page_size` is the size of the page

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
        "updatedAt": ,
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
