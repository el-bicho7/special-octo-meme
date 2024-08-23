const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
// Title, Author, Reviews
const bookSchema = new Schema({
  bookTitle: {
    type: String,
    required: "You need to leave a book!",
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  bookAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
   addedBy: {
     type: Schema.Types.ObjectId,
     ref: "User",
   },
  reviews: [
    {
      reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      reviewAuthor: {
        type: String,
        required: true,
      },
      reviewRating: {
        type: Number,
        require: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Book = model("Book", bookSchema);

module.exports = Book;
