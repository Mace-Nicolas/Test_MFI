import React, { useState, useEffect } from "react";

import { handleMapClick } from "../../components/mapWrapper/utils";

import { Map } from "ol";

export const useMap = (
  target,
  rasterLayer,
  vectorLayer,
  view,
  setActiveCity,
  setViewCoordinates,
  cityHasChanged
) => {
  const [map, setMap] = useState();

  useEffect(() => {
    const initialMap = new Map({
      target: target.current || undefined,
      layers: [rasterLayer, vectorLayer],

      view,
    });

    initialMap.on("click", (e) => {
      handleMapClick(initialMap, e.pixel, e.coordinate, setActiveCity);
      const pixel = initialMap.getEventPixel(e.originalEvent);
      const hit = initialMap.hasFeatureAtPixel(pixel);
      if (hit) cityHasChanged();
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
    setActiveCity,
    setViewCoordinates,
  ]);

  return map;
};
