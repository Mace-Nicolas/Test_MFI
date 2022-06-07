import { useState, useEffect } from "react";
import { createPoint } from "./utils";

export const usePointsFeatures = (arrayOfFeatures, color) => {
  const [pointsFeatures, setPointsFeatures] = useState([]);

  useEffect(() => {
    let arrayOfPoints = [];

    arrayOfFeatures.map((feature) => {
      const {
        coordinates: { lat, lon },
      } = feature;

      const point = createPoint(feature.name, lon, lat, color);

      return arrayOfPoints.push(point);
    });

    setPointsFeatures(arrayOfPoints);
  }, [arrayOfFeatures, color]);

  return pointsFeatures;
};
