# Sign out

Used to sign out an user (revoke the tokens).

**URL** : `/oauth/logout/`

**Method** : `POST`

**Auth required** : YES

* Header.Authorization: bearer + access_token

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": 1,
  "data": null,
  "msg": "Logged out"
}
```

## Error Response

