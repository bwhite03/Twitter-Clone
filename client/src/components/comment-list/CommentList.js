import React from "react";
import Comment from "../comment/Comment";

function CommentList(props) {
  return (
    <div id="comment-list-container">
      {props.tweet.comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentList;
