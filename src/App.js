import React from "react";
import Navbar from "./components/navbar/navbar.component";
import ScreenContainer from "./components/screenContainer/screenContainer.component";
import ContextProvider from "./context/provider-context";

const App = () => {
  return (
    <ContextProvider>
      <Navbar />
      <ScreenContainer />
    </ContextProvider>
  );
};

export default App;
