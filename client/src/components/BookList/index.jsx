import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { REMOVE_BOOK } from "../../utils/mutations";

const BookList = ({ books, title, showTitle = true, showUsername = true }) => {
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);

  const handleRemoveBook = async (bookID) => {
    try {
      await removeBook({
        variables: { bookID },
      });
    } catch (err) {
      console.error("Error removing the book.", err);
      console.error("GraphQL error details:", error.graphQLErrors);
      console.error("Network error details:", error.networkError);
    }
  };

  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {books &&
        books.map((book) => (
          <div
            key={book._id}
            className="card mb-3 bg-base-300 w-1/4 shadow-xl border-book-left color-base-content"
          >
            <div className="card-body p-2 m-0 h-32">
              {showUsername ? (
                <Link className="text-light" to={`/books/${book._id}`}>
                  <h5 class="card-title">{book.bookTitle}</h5>
                  <span style={{ fontSize: "1rem" }}>Author</span>
                  <div className="bg-light p-2">
                    <p>{book.bookAuthor}</p>
                  </div>
                  <span style={{ fontSize: "1rem" }}>Book added by</span>
                  <div className="bg-light p-2">
                    <p>{book?.addedBy ? book?.addedBy?.username : "unknown"}</p>
                  </div>
                </Link>
              ) : (
                <>
                  <Link className="text-light" to={`/books/${book._id}`}>
                    <div className="bg-light p-2">
                      <h5 class="card-title">{book.bookTitle}</h5>
                    </div>
                    <span
                      style={{ fontSize: "1rem" }}
                      className="absolute bottom-2 right-4"
                    >
                      Added on {book.createdAt}
                    </span>
                  </Link>
                </>
              )}
              {/* <button
                onClick={() => handleRemoveBook(book._id)}
                className="btn btn-danger mt-2"
              >
                Remove Book
              </button> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;
