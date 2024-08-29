// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

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
  console.log("data", book);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="col-12 mb-3 pb-3 p-8">
        <div className="p-3 bg-secondary">
          <h3 className="card-header bg-dark text-primary p-2 m-0">
            Title: {book.bookTitle}
          </h3>
          <Link
            to={`/profiles/${book._id}`}
            className="card bg-secondary hover:underline"
          >
            <h4>{book.addedBy.username}</h4>
          </Link>
        </div>
        <div className="my-5">
          <ReviewList reviews={book.reviews} />
        </div>
        <div className="m-3 p-4" style={{ border: "1px dotted #1a1a1a" }}>
          <ReviewForm bookId={book._id} />
        </div>
      </div>
    </>
  );
};

export default SingleBook;
