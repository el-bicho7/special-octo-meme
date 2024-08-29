import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data, error } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  console.log(data);
  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (error) {
    console.log("Graphql error", error);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    // The User must show my uploaded books, add books, erase a book, modify book
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 mt-4 text-4xl">
         Your Profile
        </h2>
          {!userParam && (
            <div className="col-12 col-md-10 mb-3 p-3">
              <BookForm />
            </div>
          )}
        <h4 className="text-3xl my-2">Your books</h4>
        <div className="col-12 col-md-10 mb-5">
          <BookList
            books={user.books}
            title={`${user.username}'s books...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
