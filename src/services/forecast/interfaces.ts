export interface RawForecastResponse {
  hourly: {
    temperature_2m: number[]
    time: number[]
  }
}

export interface Coords {
  lat: number
  lng: number
}
