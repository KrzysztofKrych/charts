export interface RawForecastResponse {
  hourly: {
    temperature_2m: number[]
    time: string[] // TODO change to date??
  }
}
