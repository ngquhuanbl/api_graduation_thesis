# Get draft annotation data of a task (Annotation server)

Get UNSUBMITTED (aka DRAFT) annotation data of a task

**URL** : `/api/annotation/draft?pg_no={page_number}&pg_size={page_size}&task={task_id}`

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
  "data":  [
    {
      "task": 1234,
      "taskDetail": 2134,
      "image": 2345,
      "markingObjects": [
        {
          "tool": 123121,
          "data": {
            "interior" : [
              {
                "objs" : [
                  {"x" : 1,"y" : 2.45},
                  {"x" : 0,"y" : 4.56},
                  {"x" : 1,"y" : 3.45}
                ]
              },
              {
                "objs" : [
                  {"x" : 3,"y" : 2.45},
                  {"x" : 4,"y" : 4.56},
                  {"x" : 6,"y" : 3.45}
                ]
              }
            ],
            "exterior" : [
              {"x" : 1,"y" : 2.45},
              {"x" : 0,"y" : 4.56},
              {"x" : 1,"y" : 3.45}
            ],
            "bitmap": null,
          },
        }
      ]
    }
  ],
  "msg": null,
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
