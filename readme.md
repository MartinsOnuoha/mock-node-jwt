# Mock Node JWT
> This is only a mock server with !JWT implementation.

- [Mock Node JWT](#mock-node-jwt)
  - [Home Route](#home-route)
  - [Get A Token](#get-a-token)
  - [Access Protected Route](#access-protected-route)

## Home Route
- Route: `/ `
- Method: `GET`
- Response:
  ```json
    {
        "error": false,
        "msg": "welcome, unrestricted route"
    }
  ```

------------

## Get A Token
- Route: `/auth`
- Method: `POST`
- Param:
  ```json
    {
      "username": "mars",
      "password": "qqqqqq"
    }
  ```
- Response
  ```json
      {
          "error": false,
          "msg": "authenticated",
          "user": {
              "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6...",
              "username": "mars"
          }
      }
  ```

## Access Protected Route
- Route: `/restricted`
- Method: `GET`
- Headers:
  ```json
    authorization: Bearer YOUR_TOKEN
  ```
- Response:
  ```json
    {
        "error": false,
        "msg": "success!! welcome to protected route"
    }
  ```
