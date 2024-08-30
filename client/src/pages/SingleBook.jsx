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
  console.log("data", data);
  const book = data?.book || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="col-12 mb-3 pb-3 p-8">
        <div className="p-3  mt-4">
          <h2 className="col-12 col-md-10 text-4xl mb-2 inline-block">
            {" "}
            {book.bookTitle}
          </h2>
          <p>
            Added by{" "}
            <Link
              to={`/profiles/${book.addedBy._id}`}
              className="link link-primary"
            >
              {" "}
              {book.addedBy.username}
            </Link>
          </p>
        </div>
        <div className="my-5">
          <ReviewList reviews={book.reviews} />
        </div>
        <div className="m-3 p-4" style={{ borderTop: "3px dotted #1a1a1a" }}>
          <ReviewForm bookId={book._id} />
        </div>
      </div>
    </>
  );
};

export default SingleBook;
