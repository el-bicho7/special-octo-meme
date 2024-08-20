const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    reviews: [Review]!
  }

  type Book {
    _id: ID
    bookTitle: String
    bookAuthor: String
    createdAt: String
    reviews: [Review]!
  }

  type Review {
    _id: ID
    reviewText: String
    reviewAuthor: String
    createdAt: String
    reviewRating: Float
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookTitle: String!): Book
    addReview(bookID: ID!, reviewText: String!): Book
    removeBook(bookId: ID!): Book
    removeReview(bookId: ID!, reviewId: ID!): Book
  }
`;

module.exports = typeDefs;
