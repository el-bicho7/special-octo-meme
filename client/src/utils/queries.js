import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        _id
        bookTitle
        createdAt
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query getBooks {
    books {
      _id
      bookTitle
      bookAuthor
      createdAt
      addedBy
    }
  }
`;

export const QUERY_SINGLE_BOOK = gql`
  query getSingleBook($bookId: ID!) {
    book(bookId: $bookId) {
      _id
      bookTitle
      bookAuthor
      createdAt
      addedBy
      reviews {
        _id
        reviewText
        reviewAuthor
        reviewRating
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        _id
        bookTitle
        createdAt
      }
    }
  }
`;

export const QUERY_BOOKS_RATING = gql`
  query top5Rating {
    top5Rating {
      _id
      bookTitle
      bookAuthor
      averageRating
    }
  }
`;

export const QUERY_BOOKS_USER = gql`
  query BooksWithUser {
    booksWithUser {
      _id
      bookTitle
      bookAuthor
      createdAt
      userInfo {
        username
      }
    }
  }
`;
