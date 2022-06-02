import { Feature } from "ol";
import React, { useState, useEffect } from "react";

import { createVectorsAndLayers } from "../features/utils";

export const useLayers = (features) => {
  const [layers, setLayers] = useState(createVectorsAndLayers(features));

  useEffect(() => {
    const { rasterLayer, vectorLayer } = createVectorsAndLayers(features);
    setLayers({ rasterLayer, vectorLayer });
  }, [features]);

  return layers;
};
