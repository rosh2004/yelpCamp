# YelpCamp udemy course by colt steele The Web Developer Bootcamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

## Each Campground has:

* Name
* Image

```js
[
    {name: "Salmon Creek", image: "http://www.image.com"},
    {name: "Salmon Creek", image: "http://www.image.com"},
    {name: "Salmon Creek", image: "http://www.image.com"},
    {name: "Salmon Creek", image: "http://www.image.com"},
    {name: "Salmon Creek", image: "http://www.image.com"},
    {name: "Salmon Creek", image: "http://www.image.com"}
]
```

## Layout and Basic Styling

* Create our header and footer partials
* Add in Bootstrap

## Create New Campground

* Setup new campground POST route
* Add in body Parser
* Setup route to show form
* Add basic unstyloed form

## Style the campgrounds page

* Add a better heder/title
* Make campgrounds display in a grid

## Style Navbar and Form

* Add navbar to all templates
* Style the new campground form

## Add Mongoose
* Install and configure Mongoose
* Setup campground model
* Use campground model inside of our routes

## Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL ROUTES

|name |       url|         verb|    desc|
|----|----------|-------------|--------|
|INDEX|    /dogs |      GET    | Display a list of all dogs|   
|NEW  |       /dogs/new|   GET  |   Display form to make a new dog|
|CREATE|      /dogs |      POST |   Add new dog to DB|
|SHOW |       /dogs/:id  | GET  |   Shows info about one dog|


## Reafactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

## Add seeds File

## Add the Comment model!
* Make our errors go away!
* Display comments on campground show page

## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

### RESTFUL ROUTES

|name   |     url     |    verb  |  desc.|
|-------|--------------|--------|----------|
|INDEX     |  /dogs   |    GET    | Display a list of all dogs   |
|NEW      |   /dogs/new |  GET |    Display form to make a new dog|
|CREATE    |  /dogs     |  POST  |  Add new dog to DB|
|SHOW     |   /dogs/:id  | GET    | Shows info about one dog|
||
|INDEX     |  /campgrounds|
|NEW       |  /campgrounds/new|
|CREATE      |/campgrounds|
|SHOW       | /campgrounds/:id|

### COMMENTS - NESTED ROUTES

|NEW       |  /campgrounds/:id/comments/new  | GET|
|CREATE     | /campgrounds/:id/comments       |POST|

## Style Show Page
* Add sidebar to show page
* Dispaly comments nicely

## Add User Model
* Install all packages needed for Auth
* Define User model

## Aut Pt. 2 - Register
* Configure Pass[prt
* Add register routes
* Add register template

## Auth Pt. 3 - Login
* Add login routes
* Add login template

## Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth link correctly

## Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar correctly

## Refactor The Routes
* Use Express router ti reorganize all routes

## User + Comments
* Associate users and comments
* Save author's name to a comment automatically

## User + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username+id to newly created campground

## Editing Campground
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

## Deleting Campgrounds
* Add Destroy Route
* Add Delete button

## Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

## Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Update route

## Deleting Comments
* Add Destroy route
* Add Delete button

## Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

## Adding in Flash!
* Install and configure connect-flash
* Add bootstrap alerts to header