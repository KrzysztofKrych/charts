import { Coords } from './interfaces'

export const FORECAST_API_URL = 'https://api.open-meteo.com/v1/forecast'

export const WARSAW_COORDS: Coords = {
  lat: 52.22,
  lng: 21.01,
  label: 'Warsaw',
}

const BERLIN_COORDS: Coords = {
  lat: 52.31,
  lng: 13.02,
  label: 'Berlin',
}
const TOKYO_COORDS: Coords = {
  lat: 35.65,
  lng: 139.5,
  label: 'Tokyo',
}
const KAIR_COORDS: Coords = {
  lat: 30.37,
  lng: 31.14,
  label: 'Kair',
}
const BUENOS_AIRES_COORDS: Coords = {
  lat: -34.36,
  lng: -58.22,
  label: 'Buenos Aires',
}

export const HARDCODED_CITIES = [WARSAW_COORDS, BERLIN_COORDS, TOKYO_COORDS, KAIR_COORDS, BUENOS_AIRES_COORDS]
