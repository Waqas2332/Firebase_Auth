import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const GuestLinks = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Log In
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Register
          </Link>
        </li>
      </>
    );
  };
  const AuthLinks = () => {
    return (
      <>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Logout
          </Link>
        </li>
      </>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          AuthEx
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-0 mb-2 mb-lg-0">
            {auth ? <AuthLinks /> : <GuestLinks />}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
