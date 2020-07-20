import React from "react";
import { NavLink } from "react-router-dom";
import TweetDialog from "../util/tweet-dialog/TweetDialog";
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
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import Chip from "@material-ui/core/Chip";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./nav.styles.scss";

function Nav(props) {
  const { userInfo } = props;
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("auth-token");
    history.push("/signin");
  };

  return (
    <nav id="nav-container">
      {userInfo._id ? (
        <List>
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
          <NavLink to="/notifications" exact activeClassName="active-link">
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
          <TweetDialog style={{ color: "red" }} />
          <Chip
            onClick={logout}
            label="Logout"
            icon={<ExitToAppOutlinedIcon />}
            style={{ marginTop: "20px" }}
          />
        </List>
      ) : (
        <List>
          <NavLink to="/" exact activeClassName="active-link">
            <ListItem button>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <NavLink to="/signin">
            <ListItem button>
              <ListItemIcon>
                <ExploreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItem>
          </NavLink>
          <NavLink to="/signin">
            <ListItem button>
              <ListItemIcon>
                <NotificationsNoneOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
          </NavLink>
          <NavLink to="/signin">
            <ListItem button>
              <ListItemIcon>
                <EmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
          </NavLink>
          <NavLink to="/signin">
            <ListItem button>
              <ListItemIcon>
                <BookmarkBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItem>
          </NavLink>
          <NavLink to="/signin" exact activeClassName="active-link">
            <ListItem button>
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </NavLink>
        </List>
      )}
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps)(Nav);
