const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
// Title, Author, Reviews
const thoughtSchema = new Schema({
  bookTitle: {
    type: String,
    required: "You need to leave a thought!",
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
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
