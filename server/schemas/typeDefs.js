const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    books: [Book]!
  }

  type Book {
    _id: ID
    bookTitle: String
    bookAuthor: String
    createdAt: String
    addedBy: ID!
    userInfo: User
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: ID!
    createdAt: String
    reviewRating: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
    booksWithUser: [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookTitle: String!, bookAuthor: String!, addedBy:ID!): Book
    addReview(bookId: ID!, reviewText: String!, reviewRating: Int!, reviewAuthor:ID!): Book
    removeBook(bookId: ID!): Book
    removeReview(bookId: ID!, reviewId: ID!): Book
  }
`;

module.exports = typeDefs;
