import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProfileTweetList from "../profile-tweet-list/ProfileTweetList";

function ProfileTabs(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Card variant="outlined">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Tweets" />
          <Tab label="Following" />
        </Tabs>
      </Card>
      {value === 0 ? <ProfileTweetList /> : <p>Following</p>}
    </div>
  );
}

export default ProfileTabs;
