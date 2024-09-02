import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { REMOVE_BOOK } from "../../utils/mutations";

import { QUERY_USER, QUERY_ME } from "../../utils/queries";

const BookList = ({ books, title, showTitle = true, showUsername = true, deleteButton = false }) => {
  const [removeBook, { error }] = useMutation(REMOVE_BOOK, {
    refetchQueries: [
      { query: QUERY_USER },
      { query: QUERY_ME },
    ],
  });
  
  console.log('delete button', deleteButton);
  const handleRemoveBook = async (bookId) => {
    console.log('Hello HandleRemoveBook');
    console.log(bookId);
    try {
      await removeBook({
        variables: { bookId },
      });
    } catch (err) {
      console.error("Error removing the book.", err);
    }
  };

  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div  className="flex flex-wrap gap-4">
      {showTitle && <h3 className="w-full">{title}</h3>}
      {books &&
        books.map((book) => (
          <div
            key={book._id}
            className="card mb-3 bg-base-300 w-full md:w-1/2 lg:w-1/3 shadow-xl border-book-left color-base-content"
          >
            <div className="card-body p-2 m-0 h-58">
              {showUsername ? (
                <Link className="text-light" to={`/books/${book._id}`}>
                  <h5 class="card-title">{book.bookTitle}</h5>
                  <span style={{ fontSize: "1rem" }}>Author</span>
                  <div className="bg-light p-2">
                    <p>{book.bookAuth}</p>
                  </div>
                  <span style={{ fontSize: "1rem" }}>Book added by</span>
                  <div className="bg-light p-2">
                    <p>{book?.addedBy ? book?.addedBy?.username : "unknown"}</p>
                  </div>
                </Link>
              ) : (
                <>
                  <Link className="text-light" to={`/books/${book._id}`}>

                  <h5 class="card-title">{book.bookTitle}</h5>
                  <span style={{ fontSize: "1rem" }}>Author</span>
                  <div className="bg-light p-2">
                    <p>{book.bookAuthor}</p>
                  </div>
                  <span style={{ fontSize: "1rem" }}>Added on </span>
                  <div className="bg-light p-2">
                    <p>{book.createdAt}</p>
                  </div>
                  </Link>
                </>
              )}
              {deleteButton && 
              <button
                onClick={() => handleRemoveBook(book._id)}
                className="btn btn-danger mt-2"
              >
                Remove Book
              </button>
            }

            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;
