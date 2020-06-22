import React from "react";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import "./comment.styles.scss";

function Comment(props) {
  return (
    <Card variant="outlined" id="comment-container">
      <div className="containerr">
        <div className="avatar">
          {props.comment.profileImg ? (
            <Avatar src={props.comment.profileImg} alt="userimg" sizes={"lg"} />
          ) : (
            <Avatar alt="userimg" sizes={"lg"}>
              {props.comment.username.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </div>
        <div style={{ width: "100%" }}>
          <div className="info-container">
            <Link to={`/${props.comment.userid}`}>
              <p className="username">{props.comment.username}</p>
            </Link>
            <p className="date">
              {moment(props.comment.dateCreated).calendar()}
            </p>
          </div>
          <div className="content-container">
            <p>{props.comment.content}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Comment;
