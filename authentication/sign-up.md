# Sign up

Used to register a new user.

**URL** : `/oauth/register/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
    "name": "[valid full name of user]",
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Data example**

```json
{
    "name": "Daniel Caesar",
    "email": "iloveauth@example.com",
    "password": "abcd1234"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": 1,
  "data": "",
  "msg": "Register Successfully",
}
```

## Error Response

**Condition** : Failed to register a user with the corresponding information

**Code** : `200 OK`

**Content** :

```json
{
  "status": -1,
  "data": "",
  "msg": "Failed to register user",
}
```