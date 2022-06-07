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
import { cities } from "./utils";

const MapWrapper = () => {
  const cityContext = useCity();
  const tabContext = useTab();

  const [cityHasChanged, setCityHasChanged] = useState(false);
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
    setViewCoordinates,
    () => setCityHasChanged(true)
  );

  useEffect(() => {
    if (cityHasChanged) {
      tabContext.dispatch({ type: "SET_TAB", payload: "charts" });
      cityContext.dispatch({
        type: "SET_ACTIVE_CITY",
        payload: activeCityFromMap,
      });
      setTimeout(() => {
        setCityHasChanged(false);
      }, 0);
    }
  }, [cityHasChanged]);

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
