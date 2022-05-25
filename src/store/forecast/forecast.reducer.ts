import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { Forecast } from './interfaces'

export interface ForecastInitialState {
  forecastsHourly: Forecast[]
}

export const initialState: ForecastInitialState = {
  forecastsHourly: [],
}

const reducerName = 'forecast'

export const forecastSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setForecastHourly: (state, { payload }: PayloadAction<Forecast[]>) => {
      state.forecastsHourly = payload
    },
  },
})

export const { setForecastHourly } = forecastSlice.actions

export const forecastSelector = (state: RootState) => state.forecastReducer

export const forecastReducer = forecastSlice.reducer
