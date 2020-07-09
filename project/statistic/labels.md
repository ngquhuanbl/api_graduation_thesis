# [PROJECT] Get **label** statistic data of the project

Get the label statistic data of a specific project __filtered by label__

The data includes:
* Number of objects of which the type are the selected label
* __Donut chart data__: Number of the images having the selected label compared to the otheres

The data will be filtered by label (if required)

**Path** : `{host}/pluto/api/v1/projects/{project_id}/stat/labels`

**URL Parameters** :

| Param | Type | Note |
|-------|------|------|
| host | string | host of service |
| project_id | number | ID of the project needing statistic | 

**Query:**

| Param | Type | Note |
|-------|------|------|
| label_id | number | ID of the label needing statisctic |

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

**Example:**
`https://www.usanno.tk/pluto/api/v1/projects/234/stat/labels?label_id=5398`

## Success Response

**Code** : `200 OK`

**Content examples**

The server responses with a result of:
* 1500 objects of which the type is the selected label
* Donut chart data:
  * 1345 images having the selected label
  * 523 images not having the selected label

```json
{
  "status": 1,
  "msg": null,
  "data": {
    "total_objects": 1500,
    "donut": [
      { "name": "Have the label", "value": 1345 },
      { "name": "Don't have the label", "value": 1163 }
    ]
  }
}
```

## Error Responses

| status | Error Type | Note
|--------|------|----|
| -1 | BadRequest | Provided ID not match with any project. |
| -12xx | Execution Error | Error when execute request. |

### Or

**Condition** : If Project exists but Authorized User does not have required
permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{
  "status": -1,
  "data": null,
  "msg": "You do not have permission to perform this action.",
}
```
