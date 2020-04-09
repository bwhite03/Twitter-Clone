import React, { useState } from "react";
import Tweet from "../tweet/Tweet";

function TweetList() {
  const [state, setState] = useState([
    {
      id: 1,
      profileImg:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?cs=srgb&dl=selective-focus-photography-of-woman-1239288.jpg&fm=jpg",
      username: "Kayla",
      date: "May 18, 2020",
      tweet: "Hello guys it's my new twitter account. Please follow! ",
    },
    {
      id: 2,
      profileImg:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      username: "Blake",
      date: "May 3, 2020",
      tweet: "Sup guys, anyone trying to play CSGO?",
    },
  ]);
  return (
    <div id="tweet-list-container">
      {state.map((tweets) => (
        <Tweet key={tweets.id} tweet={tweets} />
      ))}
    </div>
  );
}

export default TweetList;
