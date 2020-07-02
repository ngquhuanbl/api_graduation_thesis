# Docs cho phần Authentication
## 1.Đăng ký
* Path: ```/oauth/register```
* Method: POST
* Body:
  ``` json 
  {
  	  "username": "nchconghung@gmail.com",
  	  "password" : "maudoden"
  }
  ```
* Response: 
  ``` json
  {
      "status": 1,
      "data": null,
      "msg": "Register Successfully"
  }
  ```
## 2.Đăng nhập
* Path: ```/oauth/token```
* Method: POST
* Header.Authorization: Basic Auth (có thể tham khảo trên mạng định dạng của nó)
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
* Body: ```form-data```
  ``` json
  {
      "username": "nchconghung@gmail.com",
      "password" : "maudoden",
      "grant_type": "password"
  }
  ```
* Response: 
  ``` json
  {
      "access_token": "bee01da9-1450-4ee0-b89f-6848a1027abe",
      "refresh_token": "3c3ccc0d-8f00-48a7-9e2d-269420dfbb19",
      "scope": "read write trust",
      "token_type": "bearer"
  }
  ```
 ## 3.Cấp mới Access Token bằng Refresh Token
* Path: ```/oauth/token```
* Method: POST
* Header.Authorization: Basic Auth (có thể tham khảo trên mạng định dạng của nó)
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
* Body: ```form-data```
  ``` json
  {
      "refresh_token" : "2647edf2-81cf-4fa8-9009-822be7ca44ed",
      "grant_type": "refresh_token"
  }
  ``` 
* Response: Kèm status code ```401-Unauthorized``` cho invalid token
  ``` json
  {
      "access_token": "bee01da9-1450-4ee0-b89f-6848a1027abe",
      "refresh_token": "2647edf2-81cf-4fa8-9009-822be7ca44ed",
      "scope": "read write trust",
      "token_type": "bearer"
  }
  ```
## 4. Đăng xuất
* Path: ```/oauth/logout```
* Method: POST
* Header.Authorization: bearer + access_token

    ```Authorization: Bearer bee01da9-1450-4ee0-b89f-6848a1027abe```
* Response: Kèm status code ```401-Unauthorized``` cho invalid token
  ``` json
  {
      "status": 1,
      "data": null,
      "msg": "Logged out"
  }
  ```
## 5. Quên mật khẩu
* Path: ```/oauth/resetpwd```
* Method: POST
* Body: 
  ``` json
  {
      "username" : "nchconghung@gmail.com"
  }
  ```
* Email: trong mail có đường link theo format: 

  ``` Link reset: http://frontend.url/reset?token=bee01da9-1450-4ee0-b89f-6848a1027abe```
## 6. Dùng Access Token để truy cập tài nguyên
* Header.Authorization: bearer + access_token

    ```Authorization: Bearer bee01da9-1450-4ee0-b89f-6848a1027abe```
* Response: Kèm status code ```401-Unauthorized``` cho invalid token