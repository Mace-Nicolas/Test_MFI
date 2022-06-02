import React, { createContext, useContext, useReducer } from "react";

const TabContext = createContext();

const tabReducer = (state, action) => {
  switch (action.type) {
    case "SET_TAB": {
      return { activeTab: action.payload };
    }
    default: {
      throw new Error("Unhandled action type: ", action.type);
    }
  }
};

const TabProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tabReducer, { activeTab: "map" });
  return (
    <TabContext.Provider value={{ state, dispatch }}>
      {children}
    </TabContext.Provider>
  );
};

const useTab = () => {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
};

export { TabProvider, useTab };
