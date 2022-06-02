import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import View from "ol/View";
import VectorSource from "ol/source/Vector";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

import { Style } from "ol/style";
import { Circle, Fill, Stroke } from "ol/style";

export const createPoint = (name, lon, lat, color) => {
  const point = new Feature({
    geometry: new Point(fromLonLat([lon, lat])),
    name,
  });

  const fill = new Fill({
    color: "transparent",
  });
  const stroke = new Stroke({
    color,
    width: 1.5,
  });

  point.setStyle(
    new Style({
      image: new Circle({
        fill: fill,
        stroke: stroke,
        radius: 5,
      }),
    })
  );
  return point;
};

export const createView = (lon, lat, zoom) =>
  new View({
    center: fromLonLat([lon, lat]),
    zoom,
  });

export const createVectorsAndLayers = (arrayOfFeatures) => {
  const vectorSource = new VectorSource({
    features: arrayOfFeatures,
  });

  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });
  const rasterLayer = new TileLayer({
    source: new OSM(),
  });
  return { vectorLayer, rasterLayer };
};
