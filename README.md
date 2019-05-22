# Film Trails

## Description

Film Trails allows to find spots by location where movies or tv shows were filmed. The user can also upload spots to the site.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
-  **Signup:** As an anon I can sign up in the platform so that I can upload the spots that i know a movie was filmed.
-  **Login:** As a user I can login to the platform so that I can upload the spots that i know a movie was filmed.
-  **Logout:** As a user I can logout from the platform so no one else can upload movie locations in my name.
-  **Add location** As a user I can add a movie location and share it with the community.
-  **Update location** As a user I can update the information of a movie location that I uploaded.
-  **Delete location** As a user I can delete a movie location that I uploaded.
-  **List locations** As a user I want to see the nearest movie locations with a spot and maximum distance given.
-  **See a movie location** As a user I want to see the details of a movie location.

## Backlog

User profile:
- Search and visualize results in a map view
- Add the location of a new movie spot with a map view
- List the spots that one user uploads
- Upload real pictures in a movie location
- Validation of spots
- Validation of pictures

  
# Client

## Routes
| Method | Path | Component | Permissions | Behavior | 
|--------|------|--------|--| -------|
| `get` | `/` | HomePageComponent| public | Links to login, signup and search |
| `get` | `/auth/signup` | SignupPageComponent| public| signup form redirect to add location after signup |
| `get` | `/auth/login` | LoginPageComponent | public |login form, link to signup, redirect to add location after login |
| `get` | `/auth/logout` | n/a| public | navigate to homepage after logout, expire session |
| `get` | `/search/:lat/:lon/:dist` | SearchPageComponent| public | shows search results |
| `get` | `/search` | SearchPageComponent| public | shows the searcher only |
| `get` | `/location/:id` | LocationPageComponent| public | shows a location information |
| `get` | `/location/add` | AddLocationPageComponent| logged page | shows a new location form |
| `get` | `/location/update/:id` | UpdateLocationPageComponent| logged page | shows a update location form if the logged user is the owner |
| `get` | `**` | NotFoundPageComponent | public | 




## Components

- HomePageComponent

- HeaderComponent
  - Input: sessionObject

- LoginPageComponent
  - Inside: HeaderComponent

- SignupPageComponent
  - Inside: HeaderComponent

- SearchPageComponent
  - Input: searchObject
  - Inside: HeaderComponent, SearcherComponent, ResultListComponent

- SearcherComponent
  - Input: searchObject

- ResultListComponent
  - Input: resultsObject
  - Inside: List of OneResultComponent

- OneResultComponent
  - Input: LocationObject

- AddLocationPageComponent
  - Inside: HeaderComponent
  
- LocationPageComponent
  - Inside: HeaderComponent

- UpdateLocationPageComponent
  - Inside: HeaderComponent


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

- Location Service
  - location.detail(id)
  - location.create(data)
  - location.delete(id)
  - location.update(id)
  - location.search(terms) 

# Server

## Models

User model

```
username - String // required
password - String // required
```

Location model

```
user - ObjectID<User> // required
title - String // required
coords - Point // required
scenePictureUrl - String // required
```

## API Endpoints (backend routes)


- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object

- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - password matches (404)
  - store user in session
  - 200 with user object

- POST /auth/logout
  - body: (empty)
  - 204

- GET /location/:id
  - 200 with locationObject of a spot
  - validation  
    - id is valid (404)
    - id exists (404)

- POST /location/add
  - body:
    - title
    - lat
    - lon
    - scenePictureUrl
  - validation
    - fields not empty
  - create location
  - 200 with locationObject

- POST /location/update/:id
  - body:
    - title
    - lat
    - lon
    - scenePictureUrl
  - validation
    - fields not empty
    - id is valid (404)
    - id exists (404)
  - update location
  - 200 with locationObject

- DELETE /location/delete/:id
  - validation
    - id is valid (404)
    - id exists (404)
  - remove location
  
- POST /search/?coords&dist
  - validation
    - fields not empty
  - 200 with array of LocationObject


## Links

### Trello/Kanban

[Trello board](https://trello.com/b/g0ZOE9Re/film-trails)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/Gusbe/FilmTrialsClient)
[Server repository Link](https://github.com/Gusbe/FilmTrialsServer)

[Deploy Link](http://filmtrials.herokuapp.com/)

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1N441SzmWvhrml3E16mw6MVfWGvnHrToUnTQ6thkGjZQ/edit?usp=sharing)