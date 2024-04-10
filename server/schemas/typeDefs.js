// Include packages needed for this application
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!): User
    removeBook(bookId: ID!): User
  }

  input BookInput {
    authors: [String]
    description: String
    title: String
    bookId: ID!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;