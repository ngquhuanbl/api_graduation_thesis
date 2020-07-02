# Login

Used to collect a Token for a registered User.

**URL** : `/oauth/token/`

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

**Body:** ```form-data```
  ``` json
  {
      "username": "nchconghung@gmail.com",
      "password" : "maudoden",
      "grant_type": "password"
  }
  ```

*Data example*

```json
{
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
  "data": {
    "access_token": "bee01da9-1450-4ee0-b89f-6848a1027abe",
    "refresh_token": "3c3ccc0d-8f00-48a7-9e2d-269420dfbb19",
    "scope": "read write trust",
    "token_type": "bearer",
    "email": "iloveauth@example.com",
    "name": "Daniel Caesar",
  },
  "msg": "Success",
}
```

## Error Response

**Condition** : If 'username' and 'password' combination is wrong.

**Code** : `200 OK`

**Content** :

```json
{
  "status": -1,
  "data": "",
  "msg": "Invalid email or password",
}
```