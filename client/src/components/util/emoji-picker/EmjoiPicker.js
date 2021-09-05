import React from "react";
import Picker from "emoji-picker-react";

function EmjoiPicker(props) {
  const onEmojiClick = (event, emojiObject) => {
    let emjoi = emojiObject.emoji;

    props.setContent(props.content + emjoi);
  };

  return (
    <div>
      <div>
        <Picker onEmojiClick={onEmojiClick} />
      </div>
    </div>
  );
}

export default EmjoiPicker;
