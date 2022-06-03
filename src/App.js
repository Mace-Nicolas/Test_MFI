import React from "react";
import Navbar from "./components/navbar/navbar.component";
import ScreenContainer from "./components/screenContainer/screenContainer.component";
import { CityProvider } from "./context/cities-context";
import { TabProvider } from "./context/tab-context";

const App = () => {
  return (
    <TabProvider>
      <CityProvider>
        <Navbar />
        <ScreenContainer />
      </CityProvider>
    </TabProvider>
  );
};

export default App;
