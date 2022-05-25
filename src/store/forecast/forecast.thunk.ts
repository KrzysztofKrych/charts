import { AppThunk } from '..'
import { Coords } from '../../services/forecast/interfaces'
import { setCoordinates, setForecastHourly } from './forecast.reducer'
import { Forecast } from './interfaces'

export const setForecastThunkAction =
  (data: Forecast[]): AppThunk =>
  async (dispatch) => {
    dispatch(setForecastHourly(data))
  }
export const setCoordinatesThunkAction =
  (data: Coords): AppThunk =>
  async (dispatch) => {
    dispatch(setCoordinates(data))
  }
