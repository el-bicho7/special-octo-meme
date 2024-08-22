// BookForm/index.jsx
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
          addedBy: Auth.getProfile().data._id
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
    <div>
      <h3>What book did you just read?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="bookTitle"
                placeholder="Book title"
                value={bookTitle}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
              ></textarea>
              <input
                type="text"
                name="bookAuthor"
                value={bookAuthor}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                placeholder="Author name"
                onChange={handleChange}
              />
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Book
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
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
  );
};

export default BookForm;
