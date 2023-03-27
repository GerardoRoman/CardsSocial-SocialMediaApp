# Social E-Cards

**IMPORTANT**: Please read this document closely. Many resources are linked within it. Before starting on your project, assemble a list of the tasks you think you need to do and discuss how you will tackle these together. The front-end will need to make some basic [wireframes](https://www.orbitmedia.com/blog/7-reasons-to-wireframe/#:~:text=for%20your%20website.-,Wireframes%20are%20simple%20black%20and%20white%20layouts%20that%20outline%20the,focusing%20on%20a%20site's%20structure).

## Description & Overview

Imagine a social network, like Twitter or Facebook. Imagine electronic greeting cards. Now imagine them together -- that's what you are building as a group in this project.

The social e-cards application lets users sign up, create greeting cards, and follow each other. A user can see cards shown from newest to oldest: they can see a collection of their own cards, a collection of cards by users they follow, and a collection of all cards.

Your application is really two applications -- a back-end API written with Django REST Framework and a front-end React application. The back-end API should be deployed on [Render](https://render.com/) and the front-end app should be deployed on [Netlify](https://www.netlify.com/).

### Cards and Customizable Options

Once a user is a member of your site, they can create "cards." You may choose to call these something else -- creative interpretation is always welcome! Think of a card as a visual message with customizable text, styling and images. As a group, you should decide on the customizable options, but there should be at least three. Some examples of customizable options you can offer users are:

- the card color (from a predefined list)
- the border style ([here is an article on making cool borders with CSS](https://amethystwebsitedesign.com/decorative-borders-with-only-css-and-no-images/))
- the font (from a predefined list; choose a set of fonts to bring in from [Google Fonts](https://fonts.google.com/))
- the text alignment
- an image to include (Note: uploading images to an API will require significantly more work. An recommended alternative is to use the [Unsplash API](https://unsplash.com/developers) on the front-end and store the image location (url) on the back-end.)
- an outer message and inner message -- the inner message would be shown with some sort of transition on click, like the front and interior of a greeting card

Discuss as a team how you will implement this and make a plan that makes sense to everyone.

## The Front End Application

### Minimum Requirements

- A user can see all the cards from all users (or all the public/published cards if you have a way to do this)
- A user can see all the cards they themselves have created
- A user can see all the cards from a user they follow
- A user can design and create a new card
- A user can update (edit) a card they've created
- A user can delete a card they've created
- A user can follow another user
- A user can unfollow another user
- A user can see a list of users they follow

### "Pages"

Users should be able to see three screens of cards:

- a screen of cards from users they follow
- a screen of their own cards
- and a screen of cards from all users

Does this mean three components? Not necessarily.

Each collection should show a reasonable number of cards, sorted with the newest first, and allow the user to click to see more.

If you would prefer to implement [an infinite scroll](https://www.smashingmagazine.com/2013/05/infinite-scrolling-lets-get-to-the-bottom-of-this/), go for it! The point is that the API should [paginate results](https://www.django-rest-framework.org/api-guide/pagination/).

### Front-end spec suggestions

You can design your front-end to have whatever components you think are necessary. A suggested layout is below. A few notes: `Route` is from react-router, nesting shows what children each component might have, and several components are re-used under different routes. This is a non-exhaustive list and created from sketching on paper.

```
- App
  - Header
    - LoginControl
    - Menubar
  - Route /
    - CardList
      - Card - LikeButton
  - Route /all
    - CardList
      - Card
        - LikeButton
  - Route /me
    - Profile
    - CardList
      - Card
  - Route /me/edit
    - ProfileEditor
  - Route /person/:username
    - Profile
    - FollowButton
    - CardList
      - Card
        - LikeButton
  - Route /create-card
    - CardEditor
      - CardForm
      - CardPreview
```

### Authenticating from the front-end

Your back-end dev(s) will show you how authentication works with Django REST Framework. What you will need to do is get an authentication token from the back-end (usually via POST to a URL like `/api/auth/token/login/`) and [store that token in localStorage](https://programmingwithmosh.com/react/localstorage-react/) for use on later requests.

### Design

As for how all of this should look, that is up to you! We are not providing wireframes, but your group should sit down and make decisions about what pages will be needed and what they will look like before you start writing code.

⚠️ Make sure your UI has sensible options for your user. For example: A user who is not the creator of a card should not see buttons or links to edit a card. If a user is logged in, they should no longer see options to log in, but they should see an option to log out. The flow through your application should make sense according to what a user would reasonably expect.

### Waiting for the API to be working

During development of the front-end, you will want to be able to make requests before the API is complete. You can handle this in a few ways.

One way is to make functions or methods for all your API calls, but instead of having them actually make the calls at first, have them set the data you are expecting without actually making an API call. Another way is to use the provided exported mock API specification for [Mockoon](https://mockoon.com/), a tool that will run a mock server for you. You will need to [download Mockoon](https://mockoon.com/download/) and open [the file provided in this repo](social-cards-mockoon.json) (in Mockoon, select "Open environment" from the File menu). Here is documentation on [getting started with Mockoon](https://mockoon.com/tutorials/getting-started/). Here is [documentation on making API calls from your React app to Mockoon](https://mockoon.com/tutorials/react-api-call-and-mocking/).

If you use Mockoon, you may want to be able to switch which server you use based on the environment your code is running in. To learn about how to access your data based on environment, [read this article on create-react-app-environments](https://medium.com/@tacomanator/environments-with-create-react-app-7b645312c09d).

You can [read more about approaches to building your front-end before the API is done in this dev.to article](https://dev.to/momentum/how-to-build-a-front-end-app-before-you-have-an-api-3ai3).

You _can_ work with your backend dev(s) to get the back-end API running on your local machine, but you do not have to.

## The Back-end Application

### Minimum Requirements

⚠️ Be sure to test that you have implemented permissions-checking correctly for these endpoints. For example, your API should not allow a user who is not the creator of a card to update a card.

- token login, logout, and register (i.e., create a new user)
- list all cards
- list all cards you've created (you, the logged in user)
- list all cards created by a user you follow
- show details of one card (with front and back messages)
- create a new card
- update a card you've made
- delete a card you've made
- follow another user
- unfollow another user
- list all the users you follow
- A README with endpoints documented

### Modeling Following on the Back-end

Note that following is a relationship between users. Different social media platforms implement this concept differently.

On Twitter, for example, relationships are one-way. If I follow you, you don't automatically follow me. On Facebook, relationships are two-way. You can choose which paradigm to use for this project, but if you make relationships two-way, they should be approved by the user to whom the relationship is being proposed (a "friend request," in Facebook terms.) _One-way relationships are easier and suggested._
[Here's blog post that reviews options for modeling relationships between users](https://charlesleifer.com/blog/self-referencing-many-many-through/) -- read it to understand the problem you are solving and then implement it in a way that makes sense to you.

### Back-end spec suggestions

You should use [djoser](https://djoser.readthedocs.io/en/latest/) and [token-based authentication](https://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication) to handle registration and login.

A suggested list of endpoints and what they should do are listed below:

| Method | URL               | Input      | Output                              | Notes                                              |
| ------ | ----------------- | ---------- | ----------------------------------- | -------------------------------------------------- |
| GET    | /cards/           | -          | list of cards from users you follow |                                                    |
| GET    | /cards/me/        | -          | list of cards you have made         | could use /cards/?list=mine or something like that |
| GET    | /cards/all/       | -          | list of cards for everyone          | could use /cards/?list=all                         |
| POST   | /cards/           | card data  | new card                            | creates a card                                     |
| GET    | /cards/:id/       | -          | data for card with specified id     |                                                    |
| PATCH  | /cards/:id/       | card data  | updated card                        | updates the card with specified id                 |
| DELETE | /cards/:id/       | -          | -                                   | deletes card with specified id                     |
| GET    | /friends/         | -          | list of all your "friends"          |                                                    |
| POST   | /friends/         | user by id | user info                           | add user as a friend                               |
| DELETE | /friends/:user_id | -          | -                                   | removes user with specified id from your friends   |

___

## 🌶️ Spicy Features

The minimum set of features is required, but you might consider adding other features. You should go for it if you have time! Some ideas:

- Liking or favoriting cards
- Comments or responses to cards
- Directly sending cards to users
- Draft cards (cards not yet shown that are still being created)
- Allow comments on cards only from followers
- Make following two-way (so that it's "friends" instead of followers) and implement friend requests
- Allow users to block followers

Be creative and make this project your own.

### CORS

CORS (Cross-Origin Resource Sharing) headers must be added to the response messages on the back-end so that the front-end app is allowed to interact with the API. This is [Read this blog post for more on how to set up CORS](https://www.stackhawk.com/blog/django-cors-guide). Back-end devs will want to use [`django-cors-headers`](https://github.com/adamchainz/django-cors-headers) and set `CORS_ALLOW_ALL_ORIGINS = True`.

A gotcha for CORS on the front end is a missing trailing slash in your request URL. If CORS headers are set correctly on the backend but you are still getting a CORS error on the front end and it mentions a redirect, try adding a forward slash (`/`) to the end of the URL for the request that is failing.
