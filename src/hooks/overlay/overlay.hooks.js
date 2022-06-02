import { Overlay } from "ol";
import React, { useState, useEffect } from "react";

export const useOverlay = (target) => {
  const [overlay, setOverlay] = useState();

  useEffect(() => {
    const infoOverlay = new Overlay({
      element: target.current || undefined,
      offset: [15, 15],
      stopEvent: false,
    });
    setOverlay(infoOverlay);
  }, [target]);

  return overlay;
};
