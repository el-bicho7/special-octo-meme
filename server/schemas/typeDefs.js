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
    addedBy: User
    reviews: [Review]!
    averageRating: Float
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
    user(_id: ID!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
    top5Rating: [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookTitle: String!, bookAuthor: String!, addedBy: ID!): Book
    addReview(bookId: ID!, reviewText: String!, reviewRating: Int!, reviewAuthor:ID!): Book
    removeBook(bookId: ID!): Book
    removeReview(bookId: ID!, reviewId: ID!): Book
  }
`;

module.exports = typeDefs;
