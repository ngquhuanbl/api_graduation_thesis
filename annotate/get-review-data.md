# Get review data of a task (Annotation server)

Get REVIEW data of  a task

**URL** : `/api/annotation/get-review`

**Method** : `POST`

**Auth required** : YES

**Permissions required** : YES

**Data constraints**

```json
{
  "task": "[task id in number]",
  "taskDetails": "[list of task detail's ids in number]",
}
```

**Data example**

```json
{
  "task": 1,
  "taskDetails": [1, 4, 7, 11, 12],
}
```

## Success Response

**Code** : `200 OK`

**Content examples**

```json
{
  "status": 1,
  "msg": null,
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
            ],
            "bitmap": null,
          },
        }
      ],
      "createdAt": 1590464805346,
      "updatedAt": 1590466281500,
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
  "msg": "Server error",
  "data": null,
}
```
