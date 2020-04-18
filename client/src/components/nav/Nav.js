import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.styles.scss";

function Nav() {
  return (
    <div id="nav-container">
      <nav>
        <div>
          <NavLink to="/">
            <span>
              <i className="fab fa-twitter"></i>
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/" activeClassName="active-link">
            <span>
              <i className="fas fa-home"></i> Home
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <span>
              <i className="fas fa-hashtag"></i> Explore
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <span>
              <i className="far fa-bell"></i> Notifications
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <span>
              <i className="far fa-envelope"></i> Messages
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <span>
              <i className="far fa-bookmark"></i> Bookmarks
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <span>
              <i className="far fa-sticky-note"></i> Lists
            </span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/profile">
            <span>
              <i className="fas fa-user-circle"></i> Profile
            </span>
          </NavLink>
        </div>
        <div className="tweet-button">
          <span>Tweet</span>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
