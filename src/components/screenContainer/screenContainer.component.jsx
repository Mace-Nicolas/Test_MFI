import React from "react";
import { useTab } from "../../context/tab-context";
import LineChart from "../lineChart/lineChart.component";
import MapWrapper from "../mapWrapper/mapWrapper.component";

const ScreenContainer = () => {
  const {
    state: { activeTab },
  } = useTab();

  if (activeTab === "map") return <MapWrapper />;
  else return <LineChart />;
};

export default ScreenContainer;
