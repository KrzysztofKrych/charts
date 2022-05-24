import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface ForecastInitialState {
  temperature: number[]
  time: string[]
}

export const initialState: ForecastInitialState = {
  temperature: [],
  time: [],
}

const reducerName = 'forecast'

export const forecastSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setTemperature: (state, { payload }: PayloadAction<number[]>) => {
      state.temperature = payload
    },
    setTime: (state, { payload }: PayloadAction<string[]>) => {
      state.time = payload
    },
  },
})

export const { setTemperature, setTime } = forecastSlice.actions

export const forecastSelector = (state: RootState) => state.forecastReducer

export const forecastReducer = forecastSlice.reducer
