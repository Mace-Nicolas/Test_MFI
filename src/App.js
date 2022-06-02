import React from "react";
import ContentWrapper from "./components/contentWrapper/contentWrapper.component";
import Navbar from "./components/navbar/navbar.component";
import ScreenContainer from "./components/screenContainer/screenContainer.component";
import { TabProvider } from "./context/tab-context";

const App = () => {
  return (
    <TabProvider>
      <Navbar />
      <ScreenContainer />
    </TabProvider>
  );
};

export default App;
