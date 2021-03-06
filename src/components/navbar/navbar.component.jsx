import React from "react";

import { useTab } from "../../context/tab-context";

import { PlainButton } from "../buttons/buttons.component";

const Navbar = () => {
  const {
    state: { activeTab },
    dispatch,
  } = useTab();

  const handleSetTab = (tab) => {
    dispatch({ type: "SET_TAB", payload: tab });
  };

  return (
    <nav className='flex items-center w-full bg-black justify-evenly h-16'>
      <PlainButton
        title='Map'
        isActive={activeTab === "map"}
        onClick={() => handleSetTab("map")}
      />
      <PlainButton
        title='Charts'
        isActive={activeTab === "charts"}
        onClick={() => handleSetTab("charts")}
      />
    </nav>
  );
};

export default Navbar;
