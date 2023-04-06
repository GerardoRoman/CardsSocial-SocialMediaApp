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



## 🐸  /cards/id/

Description: Retreves data for card with specified id 

- Allowed Request: GET
- Content-Type: application/json

Stored As:
```
{
    "id": 12,
    "created_by": "sterling",
    "title_text": "hi",
    "card_front_message": "how are you?",
    "card_back_message": "miss you",
    "created_at": "2023-04-04T14:16:55.131376Z",
    "color": "red",
    "border": "dotted",
    "font": "times new roman"
}
```
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



## 🌿  /users/id/

Description: Retreves data for user with specified id 

- Allowed Request: GET
- Content-Type: application/json

Stored As:
```
{
	"id": 8,
	"username": "ivar",
	"cards_created": [
		{
			"card_id": 7,
			"title_text": "Gift for you!"
		},
		{
			"card_id": 8,
			"title_text": "Merry Christmas!"
		}
	],
	"followers": [
        "superuser",
        "snail"
    ],
	"following": [
		"cleo",
		"victor",
		"sterling",
		"quetzal"
	]
}
```

___



## 🐬  /users/my-cards/

Description: List of cards you (the logged in user) have created

- Allowed Request: GET
- Content-Type: application/json

___



## 🦄   /users/my-cards/id/

Description: If `GET` request view of card the logged in user has made, if `PATCH`request can edit and `DELETE` request for delete card

- Allowed Request: GET, PUT, PATCH, DELETE
- Content-Type: application/json

___


## 🦕   /following/

Description: Get list of users you are following

- Allowed Request: GET
- Content-Type: application/json


___



## 🪱   /users/following/cards/

Description: Get list of cards from all the users you are following

- Allowed Request: GET
- Content-Type: application/json


___


## 🦖   /follow/username/

Description: Follow or unfollow another user, if `POST` request it will follow user, if `DELETE` request it will unfollow user

- Allowed Request: POST, DELETE
- Content-Type: application/json


___


## 🦢   /followship-count/

Description: View count of user's followers and people they are following

- Allowed Request: GET
- Content-Type: application/json


___

## 🐝   /auth/users/

Description: Creates a new user if `POST` request, if `GET` request returns stored info for logged in user

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