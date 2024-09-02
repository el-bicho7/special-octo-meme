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

  if (!books?.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div className="container mx-auto">
      {showTitle && <h3 className="text-2xl">{title}</h3>}
      <div className="flex">
      {books?.map((book) => (
          <div key={book._id} className="card m-3 p-2 bg-base-300 w-1/4 shadow-xl border-book-left color-base-content">
            <div className="card-body p-2 m-0 min-h-32">
              {showUsername ? (
                <Link className="text-light" to={`/books/${book._id}`}>
                  <h5 class="card-title">{book.bookTitle}</h5>
                  <div className="italic p-2 mt-4">
                  <span style={{ fontSize: "0.8rem" }}>By </span> {book.bookAuthor}
                  </div>
                  <div className="italic p-2">
                  <span style={{ fontSize: "0.8rem" }}>Added by </span>
                  {book?.addedBy ? book?.addedBy?.username : 'unknown'}
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
    </div>
  );
};

export default BookList;
