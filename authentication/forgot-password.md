# Forgot password

Used to verify a email and send the verification email to the corresponding mailbox

**URL** : `/pwd/forgot`

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
  "msg": "Success",
}
```

## Error Response

**Condition** : Invalid email

**Code** : `200 OK`

**Content** :

```json
{
  "status": -1,
  "data": "",
  "msg": "Invalid email",
}
```