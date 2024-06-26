import { gql } from '@apollo/client';

// User login 
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedBooks{
          bookId
        }
      }
    }
  }
`;

// Add a User 
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

// Save a book
// export const SAVE_BOOK = gql`
//   mutation saveBook($bookId: ID!, $authors: [String], $description: String!,
//    $title: String!, $image: String, $link: String) {
//     saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link) {
//       _id
//       username
//       email
//       savedBooks {
//         bookId
//         authors
//         description
//         title
//         image
//         link
//       }
//     }
//   }
// `;
export const SAVE_BOOK = gql`
  mutation SaveBook($input: BookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

// Remove a book
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;