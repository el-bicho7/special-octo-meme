import { useQuery } from "@apollo/client";

import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

// import { QUERY_BOOKS } from "../utils/queries";
import { QUERY_BOOKS_USER } from "../utils/queries";

const BookPage = () => {
  const { loading, data } = useQuery(QUERY_BOOKS_USER);
  const books = data?.booksWithUser || [];
  console.log("books", books);

  return (
    // Home Page must show best 3 ranked books
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <BookForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BookList books={books} title="Book(s) at library..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default BookPage;
