// Include packages needed for this application
const jwt = require('jsonwebtoken');
// adding the dotenv package to the project. It helps create the
// environment variable which is used to store token secret. 
require("dotenv").config();

// set token secret and expiration date
const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRES_IN;

module.exports = {
  // function for use as middleware
  authMiddleware: function ({ req }) {
    //console.log("Query: ", req.query);
    //console.log("Headers: ", req.headers);
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // if no token is found, return request object as is
    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json ({ message: 'invalid token!' });
    }

    // Return request object
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};