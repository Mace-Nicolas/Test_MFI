import React from "react";

import "./buttons.component.styles.scss";


const PlainButton = ({
  title,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={`h-9 w-28 rounded-md  tracking-wider transition-all duration-400 ${
        isActive ? "activeWhite" : "transparentBtn"
      } `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};


export { PlainButton };
