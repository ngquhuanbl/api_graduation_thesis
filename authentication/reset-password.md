# Reset password

Used to verify a email and send the verification email to the corresponding mailbox

**URL** : `/api/reset-password/`

**Method** : `POST`

**Auth required** : NO

**Data constraints**

```json
{
  "token": "[valid token]",
  "password": "[new password]",
}
```

**Data example**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  "password": "tehijoce",
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

**Condition** : Failed to reset password

**Code** : `200 OK`

**Content** :

```json
{
  "status": -1,
  "data": "",
  "msg": "Failed to reset password",
}
```