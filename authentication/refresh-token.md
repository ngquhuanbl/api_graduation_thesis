# Refresh token

Used to refresh expired access token

**URL** : `/api/refresh-token/`

**Method** : `POST`

**Auth required** : NO

**Header.Authorization:** Basic Auth (có thể tham khảo trên mạng định dạng của nó)
* Key của server: 
``` java
String CLIENT_ID = "thesis-client";
String CLIENT_SECRET = "my-secret";
```
* Params trên Basic Authorization
``` json
{
    "Username" : "thesis-client",
    "Password" : "my-secret"
}
```

**Body**: ```form-data```
  ``` json
  {
      "refresh_token" : "2647edf2-81cf-4fa8-9009-822be7ca44ed",
      "grant_type": "refresh_token"
  }
  ``` 

*Data example*

```json
{
    "refresh_token": "fdb8fdbecf1d03ce5e6125c067733c0d51de209c",
}
```


## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "status": 1,
  "data": {
    "access_token": "bee01da9-1450-4ee0-b89f-6848a1027abe",
    "refresh_token": "2647edf2-81cf-4fa8-9009-822be7ca44ed",
    "scope": "read write trust",
    "token_type": "bearer"
  },
  "msg": "Success",
}
```

## Error Response

**Condition** : Server error

**Code** : `500 Server error`

**Content** :

```json
{
  "status": -1,
  "data": "",
  "msg": "Server error",
}
```