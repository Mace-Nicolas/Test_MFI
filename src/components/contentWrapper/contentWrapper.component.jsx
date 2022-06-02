import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div
      className='flex items-center justify-evenly flex-col'
      style={{
        width: "100%",
        height: "calc(100vh - 64px)",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
