// Bringing in the required import from 'react-router-dom'
import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          <i className="text-7xl material-icons">home</i>
        </Link>,
        <Link key={2} className="nav-link text-light" to="/me">
          <i className="text-7xl material-icons">account_circle</i>
        </Link>,
        <Link key={3} className="nav-link text-light" to="/books">
          <i className="text-7xl material-icons">book</i>
        </Link>,
        <Link key={4} className="nav-link text-light" to="/aboutus">
          <i className="text-7xl material-icons">search</i>
        </Link>,
      ]}
    />
  );
}
