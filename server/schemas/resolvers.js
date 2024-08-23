const { User, Book } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("books");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("books");
    },
    books: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Book.find(params).sort({ createdAt: -1 });
    },
    book: async (parent, { bookId }) => {
      return Book.findOne({ _id: bookId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("books");
      }
      throw AuthenticationError;
    },
    booksWithUser: async () => {
      try {
        return await Book.aggregate([
          {
            $lookup: {
              from: "users",
              localField: "addedBy",
              foreignField: "_id",
              as: "userInfo",
            },
          },
          {
            $unwind: {
              path: "$userInfo",
              preserveNullAndEmptyArrays: false, // Opcional: Si no quieres eliminar documentos sin usuario
            },
          },
        ]).exec();
      } catch (error) {
        console.error("Error fetching books with user info:", error);
        throw new Error("Failed to fetch books with user info");
      }
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },

    addBook: async (parent, { bookTitle, bookAuthor, addedBy }, context) => {
      // console.log('hello resolver');
      if (context.user) {
        try {
          const book = await Book.create({
            bookTitle,
            bookAuthor,
            addedBy,
          });
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { books: book._id } }
          );
          return book;
        } catch (error) {
          console.error("Error creating book", error);
          throw new Error("Error creating book: " + error.message);
        }
      }
      throw new AuthenticationError();
      ("You need to be logged in!");
    },

    addReview: async (
      parent,
      { bookId, reviewText, reviewRating, reviewAuthor },
      context
    ) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $addToSet: {
              reviews: {
                reviewText,
                reviewRating,
                reviewAuthor,
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const book = await Book.findOneAndDelete({
          _id: bookId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { books: book._id } }
        );

        return book;
      }
      throw AuthenticationError;
    },
    removeReview: async (parent, { bookId, reviewId }, context) => {
      if (context.user) {
        return Book.findOneAndUpdate(
          { _id: bookId },
          {
            $pull: {
              reviews: {
                _id: reviewId,
                reviewsAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
