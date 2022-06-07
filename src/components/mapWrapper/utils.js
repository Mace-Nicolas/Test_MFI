import { fromLonLat, toLonLat } from "ol/proj";
import "ol/ol.css";
import Feature from "ol/Feature";

import Point from "ol/geom/Point";
import { Style } from "ol/style";
import { Circle, Fill, Stroke } from "ol/style";

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

export const handleMapClick = (map, pixel, coordinates, setActiveCity) => {
  map.forEachFeatureAtPixel(pixel, (feature) => {
    const newCoord = toLonLat(coordinates);
    const newCoordinates = [newCoord[1], newCoord[0]];
    setActiveCity({ name: feature.get("name"), coordinates: newCoordinates });
  });
};

export const cities = [
  {
    name: "Paris",
    coordinates: { lat: 48.852811356272156, lon: 2.3446346306093804 },
  },
  {
    name: "Toulouse",
    coordinates: { lat: 43.63003246400752, lon: 1.3650492174675548 },
  },
  {
    name: "Biarritz",
    coordinates: { lat: 43.48151698465427, lon: -1.5608136484360844 },
  },
];
