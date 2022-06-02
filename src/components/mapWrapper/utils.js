import React from "react";

import { fromLonLat } from "ol/proj";
import "ol/ol.css";
import Feature, { FeatureLike } from "ol/Feature";

import Point from "ol/geom/Point";
import { Style } from "ol/style";
import { Circle, Fill, Stroke } from "ol/style";
import { Map, Overlay } from "ol";

export const createFeature = (
  arrayOfFeatures,
  featureCoordinates,
  pointColor
) => {
  const feature = new Feature({
    geometry: new Point(fromLonLat(featureCoordinates)),
  });
  const fill = new Fill({
    color: pointColor,
  });
  const stroke = new Stroke({
    color: pointColor,
    width: 1.25,
  });
  feature.setStyle(
    new Style({
      image: new Circle({
        fill: fill,
        stroke: stroke,
        radius: 5,
      }),
    })
  );
  return (arrayOfFeatures = [...arrayOfFeatures, feature]);
};

export const handleMapClick = (
  map,
  pixel,
  coordinates,
  popup,
  setActiveCity
) => {
  popup?.setPosition(undefined);
  map.forEachFeatureAtPixel(pixel, (feature) => {
    setActiveCity(feature.get("name"));
    popup?.setPosition([coordinates[0], coordinates[1]]);
  });
};
