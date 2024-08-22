// BookList/index.jsx/
import { Link } from "react-router-dom";

const BookList = ({ books, title, showTitle = true, showUsername = true }) => {
  if (!books.length) {
    return <h3>No Books Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {books &&
        books.map((book) => (
          <div key={book._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${book.bookAuthor}`}
                >
                  {book.bookAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    had this book on {book.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You had this book on {book.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{book.bookTitle}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/books/${book._id}`}
            >
              Join the discussion on this book.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BookList;
