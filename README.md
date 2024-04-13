# Book Search Engine

<br/>
<p align="center">
  <a href="https://graphql.org/" >
        <img alt="GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data." src="https://img.shields.io/static/v1.svg?label=GraphQL&message=query language&color=brightgreen" /></a>
  <a href="https://www.apollographql.com/docs/apollo-server/" >
        <img alt="pollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client." src="https://img.shields.io/static/v1.svg?label=Apollo Server&message=GraphQL server&color=darkgreen" /></a>
    <a href="https://www.npmjs.com/package/mongoose">
        <img alt="Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha)" src="https://img.shields.io/static/v1.svg?label=Mongoose&message=Node.js&color=blueviolet" /></a>
    <a href="https://www.mongodb.com/">
        <img alt="MongoDB is a general purpose, document-based, distributed NoSQL database built for web application developers in the cloud era. It’s one of the most popular database choices for modern applications." src="https://img.shields.io/static/v1.svg?label=MongoDB&message=database&color=orange" /></a>
    <a href="https://www.mongodb.com/products/tools/compass">
        <img alt="MongoDB Compass is an interactive tool for querying, optimizing, and analyzing MongoDB data." src="https://img.shields.io/static/v1.svg?label=MongoDB Compass&message=DB Client&color=orange" /></a>
    <a href="https://www.npmjs.com/package/express-session">
        <img alt="express-session - A session middleware for Express.js, used for handling user sessions" src="https://img.shields.io/static/v1.svg?label=express-session&message=middleware&color=green" /></a>
    <a href="https://nodejs.org/" >
        <img alt="Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications" src="https://img.shields.io/static/v1.svg?label=Node.js&message=JavaScript runtime&color=lightyellow" /></a>
    <a href="https://expressjs.com/" >
        <img alt="Express.js - A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications" src="https://img.shields.io/static/v1.svg?label=Express.js&message=web app framework&color=blue" /></a>
    <a href="https://www.npmjs.com/package/dotenv" >
        <img alt="dotenv NPM" src="https://img.shields.io/static/v1.svg?label=npm&message=dotenv&color=brightgreen" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
        <img alt="JavaScript - ES6" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=ES6&color=violet" /></a>
    <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=lightgrey" /></a>
    <a href="https://git-scm.com/">
        <img alt="Git (for version control) - A free and open-source distributed version control system" src="https://img.shields.io/static/v1.svg?label=Git&message=version control&color=black" /></a>
    <a href="https://unb.ca/cel/bootcamps/coding.html">
        <img alt="University of New Brunswick" src="https://img.shields.io/static/v1.svg?label=UNB&message=Bootcamp&color=red" /></a>
    <a href="https://opensource.org/license/mit/">
        <img alt="The MIT License" src="https://img.shields.io/static/v1.svg?label=License&message=MIT&color=lightgreen" /></a>
</p>
<br/>

The Book Search Engine is a full-stack application that allows users to search for books via the Google Books API, and manage a personal library of books they intend to read or purchase. This project refactors a traditional RESTful API to use GraphQL with Apollo Server, showcasing the power of a MERN stack (MongoDB, Express.js, React, Node.js) integrated with Apollo GraphQL for efficient data retrieval and management.

## Description

This project was developed as part of a coding challenge to demonstrate the transition from RESTful APIs to a GraphQL API architecture. Users can search for books, save their favorite books to their account, and manage their saved books through a responsive web interface.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Database Models](#database-models)
- [API Routes](#api-routes)
- [Structure](#structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

You can simply visit the link [Book Search Engine][book-render-deployment]

## Features

- Search for books via Google Books API.
- User authentication to maintain session states.
- Save and manage books within a personal account.
- Apollo Server integration to handle GraphQL operations.
- Responsive web design for desktop and mobile devices.

## Installation

To run this application locally, you'll need to clone the repository and install its dependencies.

```bash
git clone https://github.com/naturuplift/BookSearchEngine.git
cd BookSearchEngine
```

### Server Setup

```bash
cd server
npm install
npm start
```

### Client Setup

```bash
cd client
npm install
npm start
```

## Starter Code

To start with this project we used the following [Starter Code][starter-code]

## Contributing

To contribute to this project, please create a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[book-render-deployment]: <https://booksearchengine-g9dm.onrender.com/>
[starter-code]: <https://github.com/coding-boot-camp/solid-broccoli>
[MIT]: <https://github.com/naturuplift/BookSearchEngine/blob/main/LICENSE>
