import React from "react";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import moment from "moment";

function ProfileTweet(props) {
  return (
    <Card variant="outlined" id="comment-container">
      <div className="containerr">
        <div className="avatar">
          {props.tweet.profileImg ? (
            <Avatar src={props.tweet.profileImg} alt="userimg" sizes={"lg"} />
          ) : (
            <Avatar alt="userimg" sizes={"lg"}>
              {props.tweet.username.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </div>
        <div style={{ width: "100%" }}>
          <div className="info-container">
            <Link to={`/${props.tweet.userid}`}>
              <p className="username">{props.tweet.username}</p>
            </Link>
            <p className="date">{moment(props.tweet.dateCreated).calendar()}</p>
          </div>
          <div className="content-container">
            <p>{props.tweet.content}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProfileTweet;
