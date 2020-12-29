import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import TweetDialog from "../util/tweet-dialog/TweetDialog";
import SettingsDialog from "../util/settings-dialog/SettingsDialog";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
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
  const { userInfo } = props;
  const history = useHistory();

  useEffect(() => {
    localStorage.getItem("darkmode") === "dark" &&
      document.querySelector("body").classList.add("darkmode");
  }, []);

  const logout = () => {
    localStorage.removeItem("auth-token");
    history.push("/signin");
  };

  

  return (
    <nav id="nav-container">
      {userInfo._id ? (
        <div>
          <List className="nav">
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
            <TweetDialog />
            <SettingsDialog />
            <Chip
              onClick={logout}
              label="Logout"
              icon={<ExitToAppOutlinedIcon />}
              style={{ marginTop: "20px" }}
            />
          </List>
          <div className="mobile-nav" style={{ display: "none" }}>
            <NavLink to="/" exact activeClassName="active-link">
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
            </NavLink>
            <NavLink to="/notifications" exact activeClassName="active-link">
              <ListItemIcon>
                <Badge
                  badgeContent={props.userInfo.notifications.length}
                  color="primary"
                >
                  <NotificationsNoneOutlinedIcon />
                </Badge>
              </ListItemIcon>
            </NavLink>
            <NavLink to="/messages" exact activeClassName="active-link">
              <ListItemIcon>
                <EmailOutlinedIcon />
              </ListItemIcon>
            </NavLink>
            <NavLink to="/profile" exact activeClassName="active-link">
              <ListItemIcon>
                <AccountCircleOutlinedIcon />
              </ListItemIcon>
            </NavLink>
            <TweetDialog />
            <SettingsDialog />
            <Chip
              onClick={logout}
              label="Logout"
              icon={<ExitToAppOutlinedIcon />}
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>
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
