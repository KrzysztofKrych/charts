import { AppThunk } from '..'
import { setTemperature, setTime } from './forecast.reducer'

export const setTemperatureThunkAction =
  (data: number[]): AppThunk =>
  async (dispatch) => {
    dispatch(setTemperature(data))
  }

export const setTimeThunkAction =
  (data: number[]): AppThunk =>
  async (dispatch) => {
    dispatch(setTime(data))
  }
