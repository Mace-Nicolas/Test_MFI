import React from "react";
import { CityProvider } from "./cities-context";
import { TabProvider } from "./tab-context";

const ContextProvider = ({ children }) => {
  return (
    <TabProvider>
      <CityProvider>{children}</CityProvider>
    </TabProvider>
  );
};

export default ContextProvider;
