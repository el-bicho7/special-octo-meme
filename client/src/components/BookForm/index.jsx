import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_BOOK } from "../../utils/mutations";
import { QUERY_BOOKS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const BookForm = () => {
  // const [bookText, setBookText] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addBook, { error }] = useMutation(ADD_BOOK, {
    refetchQueries: [QUERY_BOOKS, "getBooks", QUERY_ME, "me"],
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log('Hello handleformsubmit');
    try {
      const { data } = await addBook({
        variables: {
          bookTitle,
          bookAuthor,
          addedBy: Auth.getProfile().data._id,
        },
      });

      setBookTitle("");
      setBookAuthor("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "bookTitle" && value.length <= 280) {
      setBookTitle(value);
      setCharacterCount(value.length);
    } else if (name === "bookAuthor") {
      setBookAuthor(value);
    }
  };

  return (
    <div className="card bg-base-300 m-5 w-1/2 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">What book did you just read?</h3>
        {Auth.loggedIn() ? (
          <>
            <form className="text-center" onSubmit={handleFormSubmit}>
              <div className="inputs flex">
                <div className="m-2 w-1/2">
                  <textarea
                    name="bookTitle"
                    placeholder="Book title"
                    className="input input-bordered input-primary"
                    value={bookTitle}
                    onChange={handleChange}
                  ></textarea>
                  <p
                    className={`m-0 ${
                      characterCount === 280 || error ? "bg-error" : ""
                    }`}
                  >
                    Character Count: {characterCount}/280
                  </p>
                </div>
                <input
                  type="text"
                  name="bookAuthor"
                  value={bookAuthor}
                  className="input input-bordered input-primary m-2 w-1/2"
                  placeholder="Author name"
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary btn-block my-2" type="submit">
                Add Book
              </button>

              {error && (
                <div className="col-12 my-3 bg-error text-white p-3">
                  {error.message}
                </div>
              )}
            </form>
          </>
        ) : (
          <p>
            You need to be logged in to share your books. Please{" "}
            <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default BookForm;
