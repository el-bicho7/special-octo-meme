// mutatin -> ADD-BOOK
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
      addedBy
    
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($bookId: ID!, $reviewText: String!) {
    addReview(bookId: $bookId, reviewText: $reviewText) {
      _id
      bookText
      bookAuthor
      createdAt
      reviews {
        _id
        reviewText
        reviewRating
        createdAt
      }
    }
  }
`;
