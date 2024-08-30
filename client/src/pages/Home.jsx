import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { QUERY_BOOKS_RATING } from "../utils/queries";

const Home = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { loading, data, error } = useQuery(QUERY_BOOKS_RATING, {
    pollInterval: 100,
  });

  const top5Rating = data?.top5Rating || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex-col p-8 items-center">
        <h1>Welcome to the Whitebeard Library!</h1>

        <p>
          Here you can find books uploaded by our Whitebeard librarians
          favorites.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {top5Rating &&
          top5Rating.map((rating) => (
            <Link
              key={rating._id}
              to={`/books/${rating._id}`}
              className="card bg-secondary hover:underline"
            >
              <div className="card-body items-center">
                <h2 className="card-title">{rating.bookTitle}</h2>
                <p>Author: {rating.bookAuthor}</p>
                <h3>Beards: {rating.averageRating}</h3>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;
