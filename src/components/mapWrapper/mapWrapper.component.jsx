import React, { useState, useRef, useEffect } from "react";

import ContentWrapper from "../contentWrapper/contentWrapper.component";

import "ol/ol.css";

import "./mapWrapper.component.styles.scss";

import { usePointsFeatures } from "../../hooks/features/features.hooks";
import { useLayers } from "../../hooks/layers/layers.hooks";
import { useView } from "../../hooks/view/view.hooks";
import { useMap } from "../../hooks/map/map.hooks";

import { useCity } from "../../context/cities-context";
import { useTab } from "../../context/tab-context";

const cities = [
  {
    name: "Paris",
    coordinates: { lat: 48.852811356272156, lon: 2.3446346306093804 },
  },
  {
    name: "Toulouse",
    coordinates: { lat: 43.63003246400752, lon: 1.3650492174675548 },
  },
];

const MapWrapper = () => {
  const cityContext = useCity();
  const tabContext = useTab();

  const [activeCityFromMap, setActiveCityFromMap] = useState(
    cityContext.state.activeCity
  );
  const [viewCoordinates, setViewCoordinates] = useState({
    lat: 2.36,
    lon: 46.63,
    zoom: 6,
  });

  const mapElement = useRef(null);

  const pointFeatures = usePointsFeatures(cities, "#1a48ed");
  const { rasterLayer, vectorLayer } = useLayers(pointFeatures);
  const view = useView(viewCoordinates);
  const map = useMap(
    mapElement,
    rasterLayer,
    vectorLayer,
    view,
    setActiveCityFromMap,
    setViewCoordinates
  );

  // useEffect(() => {
  //   const {
  //     state: { activeCity },
  //   } = cityContext;
  //   console.log(activeCity);
  //   console.log(activeCityFromMap);
  //   if (activeCity !== activeCityFromMap) {
  //     cityContext.dispatch({
  //       type: "SET_ACTIVE_CITY",
  //       payload: activeCityFromMap,
  //     });
  //     tabContext.dispatch({ type: "SET_TAB", payload: "chart" });
  //   }
  // }, [activeCityFromMap]);

  useEffect(() => {
    console.log(activeCityFromMap);
  }, [activeCityFromMap]);

  return (
    <ContentWrapper>
      <div
        ref={mapElement}
        className='map-container map drop-shadow-md '
        style={{ width: "80%", height: "700px" }}
      ></div>
    </ContentWrapper>
  );
};

export default MapWrapper;
