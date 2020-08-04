import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { Avatar } from "@material-ui/core";
import "./message-search.styles.scss";

function MessageSearch(props) {
  //pick user and clear search
  const setUser = () => {
    props.setUser(props.user);
    props.setSearch("");
  };

  return (
    <div id="message-search-container">
      <List component="nav" style={{ width: "100%" }} onClick={setUser}>
        <ListItem button style={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex" }}>
            {props.user.profileImg ? (
              <Avatar src={props.user.profileImg} alt="userimg" sizes={"lg"} />
            ) : (
              <Avatar alt="userimg" sizes={"lg"}>
                {props.user.username.charAt(0).toUpperCase()}
              </Avatar>
            )}
            <div className="message-user-info-container">
              <p>{props.user.username}</p>
              <p className="at-username">{props.user.usernameAt}</p>
            </div>
          </div>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

export default MessageSearch;
