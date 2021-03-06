import React from "react";
import Card from "@material-ui/core/Card";
import Comment from "../comment/Comment";

function CommentList({ tweet }) {
  return (
    <div id="comment-list-container">
      <Card variant="outlined">
        {tweet.comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </Card>
    </div>
  );
}

export default CommentList;
