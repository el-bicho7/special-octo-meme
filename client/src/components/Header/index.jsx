import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import wbLogo from '../../assets/logo.png'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-light bg-neutral">
      <div className="flex px-2 py-2.5">
        <h1 className="m-auto new-amsterdam-regular text-6xl text-primary p">
          <Link className="text-light flex items-center" to="/">
            <img className="rounded-lg mr-4" alt="logo" width="65" height="70" src={wbLogo} />
            Whitebeard Library
          </Link>
        </h1>
        <p className="m-0"></p>
        <div className="absolute right-2">
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
