import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_REVIEW } from "../../utils/mutations";

import Auth from "../../utils/auth";
import { QUERY_BOOKS_USER, QUERY_SINGLE_BOOK } from "../../utils/queries";

const ReviewForm = ({ bookId }) => {
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addReview, { error }] = useMutation(ADD_REVIEW, {
    refetchQueries: [
      {
        query: QUERY_SINGLE_BOOK,
      },
    ],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addReview({
        variables: {
          bookId,
          reviewText,
          reviewRating: reviewRating,
          reviewAuthor: Auth.getProfile().data.username,
        },
      });

      setReviewText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "reviewText" && value.length <= 280) {
      setReviewText(value);
      setCharacterCount(value.length);
    }
  };

  const handleRating = (event) => {
    const { name, value } = event.target;
    console.log("Review Rating:", value);

    if (name === "reviewRating") {
      setReviewRating(parseInt(value));
    }
  };

  return (
    <div className="card bg-base-300 m-5 shadow-xl">
      <div className="card-body">
        <h4 className="card-title">What are your reviews on this book?</h4>
        {Auth.loggedIn() ? (
          <>
            <form onSubmit={handleFormSubmit}>
              <div className="m-2">
                <textarea
                  name="reviewText"
                  placeholder="Add your comment..."
                  value={reviewText}
                  rows="4"
                  className="input input-bordered input-primary w-100 "
                  style={{ lineHeight: "1.5", resize: "vertical" }}
                  onChange={handleChange}
                ></textarea>
                <p
                  style={{ fontSize: "0.825rem", fontStyle: "italic" }}
                  className={`m-0 ${
                    characterCount === 280 || error ? "bg-error" : ""
                  }`}
                >
                  Character Count: {characterCount}/280
                  {error && <span className="ml-2">{error.message}</span>}
                </p>
              </div>

              <div className="m-2">
                <select
                  name="reviewRating"
                  className="select select-primary w-full max-w-xs"
                  value={reviewRating}
                  onChange={handleRating}
                >
                  <option selected disabled value="">
                    Select Rating
                  </option>
                  <option value={1}>⭐</option>
                  <option value={2}>⭐⭐</option>
                  <option value={3}>⭐⭐⭐</option>
                  <option value={4}>⭐⭐⭐⭐</option>
                  <option value={5}>⭐⭐⭐⭐⭐</option>
                </select>
              </div>

              <div className="col-12 col-lg-3">
                <button
                  className="btn btn-primary btn-block py-3"
                  type="submit"
                >
                  Add Comment
                </button>
              </div>
            </form>
          </>
        ) : (
          <p>
            You need to be logged in to share your books. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default ReviewForm;
