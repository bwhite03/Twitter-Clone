import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";

function FontSize() {
  const [fontSize, setFontSize] = useState(16);

  const handleChange = (e, value) => {
    setFontSize(value);
    document.querySelector("body").style.fontSize = `${fontSize}px`;
  };

  return (
    <div>
      <Slider
        defaultValue={16}
        value={fontSize}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={6}
        marks
        min={10}
        max={23}
        onChange={handleChange}
      />
    </div>
  );
}

export default FontSize;
