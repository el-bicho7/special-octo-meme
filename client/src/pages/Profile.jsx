import { Navigate, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useQuery } from "@apollo/client";

import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  let routeMe = false;
  if (Auth.loggedIn) {
    const location = useLocation();
    if (location.pathname ==='/me') {
      routeMe = true;
    }
 
    const { userID } = useParams();

    const { loading, data, error } = useQuery(userID ? QUERY_USER : QUERY_ME, {
      variables: { _id: userID },
    });

    const user = data?.me || data?.user || {};
    // console.log('user',user);
    // navigate to personal profile page if username is yours
    if (Auth.loggedIn() && Auth.getProfile().data._id === userID) {
      console.log('navega a /me');
      return <Navigate to="/me" />;
    }

    if (error) {
      console.log("Graphql error", error);
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      // The User must show my uploaded books, add books, erase a book, modify book
      <div>
        <div className="flex-row justify-center mb-3">
          <h2 className="col-12 col-md-10 mt-4 text-4xl">
            {user.username} Profile
          </h2>
          {!userID && (
            <div className="col-12 col-md-10 mb-3 p-3">
              <BookForm />
            </div>
          )}
          <h4 className="text-3xl my-2"></h4>
          <div className="col-12 col-md-10 mb-5">
            <BookList
              books={user.books}
              title={`${user.username}'s books...`}
              showTitle={false}
              showUsername={false}
              deleteButton={routeMe}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <h4>
      You need to be logged in to see this. Use the navigation links above to
      sign up or log in!
    </h4>
  );
};

export default Profile;
