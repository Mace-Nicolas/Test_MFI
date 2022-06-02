import React, { useState, useEffect } from "react";

import { handleMapClick } from "../../components/mapWrapper/utils";

import BaseLayer from "ol/layer/Base";
import { Overlay, View, Map } from "ol";
import { toLonLat } from "ol/proj";

export const useMap = (
  target,
  rasterLayer,
  vectorLayer,
  view,
  overlay,
  setActiveCity,
  setViewCoordinates
) => {
  const [map, setMap] = useState();

  useEffect(() => {
    const initialMap = new Map({
      target: target.current || undefined,
      layers: [rasterLayer, vectorLayer],
      overlays: overlay && [overlay],
      view,
    });

    initialMap.on("click", (e) => {
      handleMapClick(initialMap, e.pixel, e.coordinate, overlay, setActiveCity);
    });

    initialMap.on("pointermove", (e) => {
      const pixel = initialMap.getEventPixel(e.originalEvent);
      const hit = initialMap.hasFeatureAtPixel(pixel);
      initialMap.getTarget().style.cursor = hit ? "pointer" : "";
    });
    setMap(initialMap);
    return () => {
      initialMap.setTarget(undefined);
    };
  }, [
    target,
    rasterLayer,
    vectorLayer,
    view,
    overlay,
    setActiveCity,
    setViewCoordinates,
  ]);

  return map;
};
