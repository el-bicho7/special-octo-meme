import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($bookTitle: String!, $bookAuthor: String!, $addedBy: ID!) {
    addBook(bookTitle: $bookTitle, bookAuthor: $bookAuthor, addedBy: $addedBy) {
      bookTitle
      bookAuthor
      createdAt
      addedBy {
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview(
    $bookId: ID!
    $reviewText: String!
    $reviewAuthor: ID!
    $reviewRating: Int!
  ) {
    addReview(
      bookId: $bookId
      reviewText: $reviewText
      reviewRating: $reviewRating
      reviewAuthor: $reviewAuthor
    ) {
      _id
      bookTitle
      bookAuthor
      createdAt
      reviews {
        _id
        reviewText
        reviewRating
        reviewAuthor
        createdAt
      }
    }
  }
`;
