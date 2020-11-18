# Eat-Da-Burger!

the MVC design pattern creates a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.

## Objective

MVC: Model View Controller, MVC is an architectural pattern that structures the codebase in three distinct sections according to software design philosophy ; the _separation of concerns_.  

MVC is suitable for small applications. In this assignment, rather than hard code for the HTML pages, HTML generates a template engine. This separates the concern of client-side rendering from other aspects of the application, known as the View layer in the MVC framework.

The Model is the data layer of applications. Cconcerned with the structure of the database and the logic used to retrieve that data. Object-relational mapping is implemented to create reusable methods for querying the database. 

## Key Topics

* Template engines

* Handlebars.js

* Model-View-Controller

* Object-relational mapping (ORM)   

## Algorithms

Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats.
```
var exphbs = require("express-handlebars");
```

The each-helper iterates an array, allowing to you access the properties of each object via simple handlebars expressions.
```
  {{#each hamburgers}}
    {{#if eaten}}
      {{> hamburgers/hamburger-block burger=false}}
    {{/if}}
  {{/each}}
```

## Installation

From the terminal, running npm init and npm install produces a package.json, package-lock.json and a node_modules folder. The application is accessed through the terminal by running nodemon .\server.js. The web-application is also deployed to heroku. In the assets folder are JPG images that will inform the user on how to deploy.

## License
[License](https://choosealicense.com/licenses/mit)
=======

