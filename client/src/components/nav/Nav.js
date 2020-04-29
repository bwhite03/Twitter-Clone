import React from "react";
import { NavLink } from "react-router-dom";
import TweetButton from "../util/tweet-button/TweetButton";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

import "./nav.styles.scss";

function Nav() {
  return (
    <nav id="nav-container">
      <List component="nav" aria-label="main mailbox folders">
        <NavLink to="/" exact activeClassName="active-link">
          <ListItem button>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to="/">
          <ListItem button>
            <ListItemIcon>
              <ExploreOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
        </NavLink>
        <NavLink to="/">
          <ListItem button>
            <ListItemIcon>
              <NotificationsNoneOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
        </NavLink>
        <NavLink to="/">
          <ListItem button>
            <ListItemIcon>
              <EmailOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
        </NavLink>
        <NavLink to="/">
          <ListItem button>
            <ListItemIcon>
              <BookmarkBorderOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Bookmarks" />
          </ListItem>
        </NavLink>
        <NavLink to="/profile" exact activeClassName="active-link">
          <ListItem button>
            <ListItemIcon>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </NavLink>
      </List>
      <TweetButton style={{ color: "red" }} />
    </nav>
  );
}

export default Nav;
