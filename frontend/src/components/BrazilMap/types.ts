export type LocationResponse = {
  city: string;
  latitude: number;
  longitude: number;
};

export type Location = {
  markerOffset: number;
  name: string;
  coordinates: [longitude: number, latitude: number];
};
