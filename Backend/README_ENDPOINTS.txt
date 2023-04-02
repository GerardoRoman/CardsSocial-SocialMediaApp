https://social-cards-app.onrender.com/   ----------------->  Base url -- (Request: GET)

/cards/   ---------------->  List out all cards -- (Request: GET)

/cards/<id>/   ----------->  Card detail -- (Request: GET)

/cards/search/  ---------->  Search cards (based on messages, font, color, border) -- (Request: GET)

/cards/create/ ----------->  Create card (Request: POST)

/users/   ---------------->  List out all users -- (Request: GET)

/auth/users/  ------------>  Create user if POST, see auth users if GET -- (Request: GET, POST)

/auth/token/login/  ------>  User login (user gets token, expires after certain amount of time) -- (Request: POST)
