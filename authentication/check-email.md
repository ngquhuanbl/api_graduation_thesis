# Sign up

Used to register a new user.

**URL** : `/api/check-email/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "email": "[valid email address]",
}
```

**Data example**

```json
{
    "email": "iloveauth@example.com",
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": 1,
  "data": "",
  "msg": "Available email",
}
```

## Error Response

**Condition** : Existed email

**Code** : `200 OK`

**Content** :

```json
{
  "status": -1,
  "data": "",
  "msg": "Existed email",
}
```