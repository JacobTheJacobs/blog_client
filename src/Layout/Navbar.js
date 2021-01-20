import React from "react";
import { Link, Route } from "react-router-dom";
import { signout, isAuth } from "../actions/auth";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  let history = useHistory();

  const refreshPage = () => {
    history.push("/signin");
    setTimeout(
      function () {
        window.location.reload();
      }.bind(this),
      500
    );
  };
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark bg-dark p-0"
      style={{ fontWeight: "bold" }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          Blog
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <Link to="/" className="nav-link ">
                Dashboard
              </Link>
            </li>
            {isAuth() && isAuth().role === 1 ? (
              <>
                <li className="nav-item px-2">
                  <Link to={"/myDashboard"} className="nav-link">
                    My Board
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
            {!isAuth() && (
              <>
                <li className="nav-item px-2">
                  <Link to="/signin" className="nav-link">
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ml-auto">
            {isAuth() && (
              <li className="nav-item px-2">
                <a
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => refreshPage())}
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
