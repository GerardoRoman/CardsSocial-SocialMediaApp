## 🐌  https://social-cards-app.onrender.com/ 

Description: Base url for the API

- Allowed Request: GET
- Content-Type: application/json

___


## 🐺  /cards/

Description: Retrieves a list of all cards in the API.

- Allowed Request: GET
- Content-Type: application/json

___


## 🐸  /cards/:id/

Description: Retreves data for card with specified id 

- Allowed Request: GET
- Content-Type: application/json

___


## 🐠  /cards/search/

Description: Search cards based on these fields: messages, font, color, border

- Allowed Request: GET
- Content-Type: application/json

___


## 🪲  /cards/create/

Description: Creates a new card 

- Allowed Request: POST
- Content-Type: application/json

Example POST:
```
{
	"title_text": "how are you?",
	"card_front_message": "how are you? haven't seen you in a while",
	"card_back_message": "signed, victor",
	"color": "red",
	"border": "dashed",
	"font": "times new roman"
}
```
Stored As:
```
{
    "id": 9,
    "created_by": "victor",
    "title_text": "how are you?",
    "card_front_message": "how are you? haven't seen you in a while",
    "card_back_message": "signed, victor",
    "created_at": "2023-04-02T23:34:06.227532Z",
    "color": "red",
    "border": "dashed",
    "font": "times new roman"
}
```

___



## 🌿  /users/:id/

Description: Retreves data for user with specified id 

- Allowed Request: GET
- Content-Type: application/json

___



## 🐬  users/my-cards/

Description: List of cards you (the logged in user) have created

- Allowed Request: GET
- Content-Type: application/json

___



## 🦄   users/my-cards/:id/

Description: Detail view of card the logged in user had made, can EDIT or DELETE card

- Allowed Request: GET, PUT, PATCH, DELETE
- Content-Type: application/json

___



## 🐝   /auth/users/

Description: Creates a new user if POST request, see list of authorized users if GET request

- Allowed Request: GET, POST
- Content-Type: application/json

Example POST:
```
{
    "email": "bugsnacks@gmail.com",
	"username": "littlecowboy",
	"password": "toad4life"
}
```
Stored As:
```
{
    "email": "bugsnacks@gmail.com",
    "id": 10,
    "username": "littlecowboy"
}
```
___



## 🌸  /auth/token/login/

Description: User login (user gets token, expires after certain amount of time)

- Allowed Request: POST
- Content-Type: application/json

Example POST:
```
{
    "password": "quetzalcoatlus",
    "username": "ivar"
}
```

___


## 🐓  /auth/token/logout/

Description: User logs out and token is destroyed

- Allowed Request: POST
- Content-Type: application/json
