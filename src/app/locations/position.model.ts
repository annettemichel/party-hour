export interface Coordinates {
  lat: number;
  lng: number;
}

export interface LocationPosition extends Coordinates {
  address: string;
  staticMapImageUrl: string;
}
