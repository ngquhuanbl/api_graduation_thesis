# Get **label** statistic data of the project

Get the label statistic data of a specific project __filtered by label__

The data includes:
* Number of objects of which the type are the selected label
* __Donut chart data__: Number of the images having the selected label compared to the otheres

The data will be filtered by label (if required)

**Statistic URL**: `/labels/`

**Full URL** : 
* Filtered by all labels :`/api/project/statistic/labels?projectID={project_ID}
`
* Filtered by a specific labels: `/api/project/statistic/labels?projectID={project_ID}&labelID={label_ID}`

**URL Parameters** : 
* `projectID=[number]` where `projectID` is the ID of the Project that needs the statistic data.
* `labelID=[number]` where `labelID` is the ID of the Label that the statistic data will be filtered by.

**Method** : `GET`

**Auth required** : YES

**Permissions required** : YES

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
  "data": {
    "n": 1500,
    "donut": [
      { "name": "Have the label", "value": 1345 },
      { "name": "Don't have the label", "value": 1163 }
    ]
  }
}
```

## Error Responses

**Condition** : If Project does not exist with `id` of provided `id` parameter.

**Code** : `404 NOT FOUND`

**Content** : `{}`

### Or

**Condition** : If Project exists but Authorized User does not have required
permissions.

**Code** : `403 FORBIDDEN`

**Content** :

```json
{"detail": "You do not have permission to perform this action."}
```
