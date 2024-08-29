import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-light bg-neutral">
      <div className="flex justify-between flex-row align-center px-2 py-2.5">
        <div>
        <h1 className="m-0 new-amsterdam-regular text-6xl text-primary">
          <Link className="text-light flex items-center" to="/">
            <img className="rounded-lg mr-4" alt="logo" width="65" height="70" src="/logo.png"/>
            Whitebeard Library
          </Link>
          </h1>
          <p className="m-0"></p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
