import React from "react";

import { useTab } from "../../context/tab-context";

import { PlainButton } from "../buttons/buttons.component";

const Navbar = () => {
  const {
    state: { activeTab },
  } = useTab();
  const { dispatch } = useTab();

  return (
    <nav className='flex items-center w-full bg-black justify-evenly h-16 '>
      <PlainButton
        title='Map'
        isActive={activeTab === "map"}
        onClick={() => dispatch({ type: "SET_TAB", payload: "map" })}
      />
      <PlainButton
        title='Charts'
        isActive={activeTab === "charts"}
        onClick={() => dispatch({ type: "SET_TAB", payload: "charts" })}
      />
    </nav>
  );
};

export default Navbar;
