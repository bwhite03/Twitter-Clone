import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TweetDialog from "../util/tweet-dialog/TweetDialog";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Darkmode from "../util/darkmode/Darkmode";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./nav.styles.scss";

function Nav(props) {
  const [darkmode, setDarkmode] = useState({ darkmode: false });
  const { userInfo } = props;
  const history = useHistory();

  useEffect(() => {
    localStorage.getItem("darkmode") === true &&
      document.querySelector("body").classList.add("darkmode");
  }, []);

  const logout = () => {
    localStorage.removeItem("auth-token");
    history.push("/signin");
  };

  const handleChange = (e) => {
    setDarkmode({ [e.target.name]: e.target.checked });

    if (!darkmode.darkmode) {
      document.querySelector("body").classList.add("darkmode");
      localStorage.setItem("darkmode", true);
    } else {
      document.querySelector("body").classList.remove("darkmode");
      localStorage.setItem("darkmode", false);
    }
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
          <NavLink to="/notifications" exact activeClassName="active-link">
            <ListItem button>
              <ListItemIcon>
                <Badge
                  badgeContent={props.userInfo.notifications.length}
                  color="primary"
                >
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
          </NavLink>
          <NavLink to="/messages" exact activeClassName="active-link">
            <ListItem button>
              <ListItemIcon>
                <EmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
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
          <Darkmode handleChange={handleChange} darkmode={darkmode} />
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
