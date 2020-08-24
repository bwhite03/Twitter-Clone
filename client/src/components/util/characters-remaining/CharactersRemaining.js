import React from "react";

function CharactersRemaining({ content }) {
  return (
    <div>
      <p>Characters left {280 - content.length}</p>
    </div>
  );
}

export default CharactersRemaining;
