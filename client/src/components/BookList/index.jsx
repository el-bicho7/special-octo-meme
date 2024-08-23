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
                <Link className="text-light" to={`/books/${book._id}`}>
                  {book.bookTitle} <br />
                  <span style={{ fontSize: "1rem" }}>Author</span>
                  <div className="card-body bg-light p-2">
                    <p>{book.bookAuthor}</p>
                  </div>
                  <span style={{ fontSize: "1rem" }}>Book added by</span>
                  <div className="card-body bg-light p-2">
                    <p>{book.userInfo.username}</p>
                  </div>
                </Link>
              ) : (
                <>
                  <Link className="text-light" to={`/books/${book._id}`}>
                    <div className="card-body bg-light p-2">
                      <p>{book.bookTitle}</p>
                    </div>
                    <span style={{ fontSize: "1rem" }}>
                      Added on {book.createdAt}
                    </span>
                  </Link>
                </>
              )}
            </h4>
          </div>
        ))}
    </div>
  );
};

export default BookList;
