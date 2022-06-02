import React, { useState, useRef, useEffect } from "react";

import ContentWrapper from "../contentWrapper/contentWrapper.component";

import "ol/ol.css";

import "./mapWrapper.component.styles.scss";

import { usePointsFeatures } from "../../hooks/features/features.hooks";
import { useLayers } from "../../hooks/layers/layers.hooks";
import { useView } from "../../hooks/view/view.hooks";
import { useMap } from "../../hooks/map/map.hooks";
import { useOverlay } from "../../hooks/overlay/overlay.hooks";

const cities = [
  {
    name: "Paris",
    coordinates: { lat: 43.63003246400752, lon: 1.3650492174675548 },
  },
  {
    name: "Toulouse",
    coordinates: { lat: 43.63003246400752, lon: 1.3650492174675548 },
  },
];

const MapWrapper = () => {
  const [activeCity, setActiveCity] = useState(cities);
  const [viewCoordinates, setViewCoordinates] = useState({
    lat: 2.36,
    lon: 46.63,
    zoom: 6,
  });

  const mapElement = useRef(null);
  const infoElement = useRef(null);

  const pointFeatures = usePointsFeatures(activeCity, "#1a48ed");
  const { rasterLayer, vectorLayer } = useLayers(pointFeatures);
  const view = useView(viewCoordinates);
  const overlay = useOverlay(infoElement);

  useMap(
    mapElement,
    rasterLayer,
    vectorLayer,
    view,
    overlay,
    setActiveCity,
    setViewCoordinates
  );

  return (
    <ContentWrapper>
      <div
        ref={mapElement}
        className='map-container map drop-shadow-md '
        style={{ width: "80%", height: "700px" }}
      >
        <div
          ref={infoElement}
          className='p-2 drop-shadow-md bg-slate-200'
          style={{ width: 250, height: 220 }}
        ></div>
      </div>
    </ContentWrapper>
  );
};

export default MapWrapper;
