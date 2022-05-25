import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { WARSAW_COORDS } from '../../services/forecast/consts'
import { Coords } from '../../services/forecast/interfaces'
import { Forecast } from './interfaces'

export interface ForecastInitialState {
  forecastsHourly: Forecast[]
  coordinates: Coords
}

export const initialState: ForecastInitialState = {
  forecastsHourly: [],
  coordinates: WARSAW_COORDS,
}

const reducerName = 'forecast'

export const forecastSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setForecastHourly: (state, { payload }: PayloadAction<Forecast[]>) => {
      state.forecastsHourly = payload
    },
    setCoordinates: (state, { payload }: PayloadAction<Coords>) => {
      state.coordinates = payload
    },
  },
})

export const { setForecastHourly, setCoordinates } = forecastSlice.actions

export const forecastSelector = (state: RootState) => state.forecastReducer

export const forecastReducer = forecastSlice.reducer
