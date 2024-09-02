import { useQuery } from "@apollo/client";

import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

import { QUERY_BOOKS } from "../utils/queries";
// import { QUERY_BOOKS_USER } from "../utils/queries";

const BookPage = () => {
  const { loading, data } = useQuery(QUERY_BOOKS);
  const books = data?.books || [];

  return (
    // Home Page must show best 3 ranked books
    <main>
      <div className="flex-row justify-center">
        <div>
          <BookForm />
        </div>
        <div className="mx-10 my-2">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <BookList books={books} title="Books at library..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default BookPage;
