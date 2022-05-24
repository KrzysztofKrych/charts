export interface RawForecastResponse {
  hourly: {
    temperature_2m: number[]
    time: number[]
  }
}
