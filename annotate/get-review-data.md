# Get draft annotation data of a task (Annotation server)

Get UNSUBMITTED (aka DRAFT) annotation data of  a task

**URL** : `/api/annotation/review?id={task_id}`

**URL Parameters** : `id=[number]` where `id` is the ID of the Task of which data the user is requesting

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
      "status": 0,
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
            ]
          },
        }
      ]
    }
  ]
}
```

## Error Responses

**Condition** : Server error

**Code** : `500 SERVER ERROR`

**Content** :

```json
{ "detail": "Server error" }
```
