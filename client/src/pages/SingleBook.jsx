// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

import { QUERY_SINGLE_BOOK } from "../utils/queries";

const SingleBook = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { bookId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_BOOK, {
    // pass URL parameter
    variables: { bookId: bookId },
  });

  const book = data?.book || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {book.bookTitle} <br />
        <span style={{ fontSize: "1rem" }}>
          {book.addedBy} had this book on {book.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        ></blockquote>
      </div>

      <div className="my-5">
        <ReviewList reviews={book.reviews} />
      </div>
      <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
        <ReviewForm bookId={book._id} />
      </div>
    </div>
  );
};

export default SingleBook;
