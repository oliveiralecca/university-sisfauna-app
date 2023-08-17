import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Point,
} from "react-simple-maps";

import { useDataContext } from "../../contexts/dataContext";
import { LocationResponse, Location } from "./types";

const BR_MAP_URL =
  "https://gist.githubusercontent.com/ruliana/1ccaaab05ea113b0dff3b22be3b4d637/raw/196c0332d38cb935cfca227d28f7cecfa70b412e/br-states.json";

export function BrazilMap() {
  const [mapData, setMapData] = useState<Location[]>();
  const { setEmptyLocations, locationsResponse } = useDataContext();

  useEffect(() => {
    if (typeof locationsResponse !== "string") {
      const allLocations = locationsResponse.map((loc: LocationResponse) => ({
        markerOffset: 25,
        name: loc.city,
        coordinates: [loc.longitude, loc.latitude] as Point,
      }));

      setMapData(allLocations);
    } else {
      setEmptyLocations(locationsResponse);
    }
  }, [locationsResponse, setEmptyLocations]);

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [55, 16, 0],
        scale: 800,
      }}
    >
      <Geographies geography={BR_MAP_URL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#9DC08B"
              stroke="#EDF1D6"
            />
          ))
        }
      </Geographies>
      {mapData?.map(({ name, coordinates }) => (
        <Marker key={`${name}-${coordinates[0]}`} coordinates={coordinates}>
          <circle r={8} fill="#F00" stroke="#fff" strokeWidth={4} />
        </Marker>
      ))}
    </ComposableMap>
  );
}
