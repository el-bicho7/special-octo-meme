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
          <div key={book._id} className="card mb-3 bg-base-300 w-1/4 shadow-xl border-book-left color-base-content">
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
                    <p>{book?.addedBy ? book?.addedBy?.username : 'unknown'}</p>
                  </div>
                </Link>
              ) : (
                <>
                  <Link className="text-light" to={`/books/${book._id}`}>
                    <div className="bg-light p-2">
                    <h5 class="card-title">{book.bookTitle}</h5>
                    </div>
                    <span style={{ fontSize: "1rem" }} className="absolute bottom-2 right-4">
                      Added on {book.createdAt}
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BookList;
