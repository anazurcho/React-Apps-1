import React from "react";

// import { NavLink, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={{
                pathname: "/",
              }}
              // to={'/'}// ან
              exact
              activeClassName="my-active"
              activeStyle={{
                color: "green",
              }}
            >
              Home <span className="sr-only">(current)</span>
            </NavLink>
            {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/users"
              activeClassName="my-active"
              activeStyle={{
                color: "green",
              }}
            >
              Users
            </NavLink>
            {/* <a className="nav-link" href="/users">Users</a> */}
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={{
                pathname: "/blog",
                hash: "chapter-4",
                search: "?s=javascript",
              }}
              activeClassName="my-active"
              activeStyle={{
                color: "green",
              }}
            >
              Blog
            </NavLink>
            {/* <a className="nav-link" href="/Blog">Blog</a> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
