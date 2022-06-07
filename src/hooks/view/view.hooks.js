import { useEffect, useState } from "react";
import { createView } from "../features/utils";

export const useView = ({ lon, lat, zoom }) => {
  const [view, setView] = useState(createView(1.36, 43.63, 7));

  useEffect(() => {
    const newView = createView(lat, lon, zoom);
    setView(newView);
  }, [lon, lat, zoom]);

  return view;
};
