import { AppThunk } from '..'
import { setForecastHourly } from './forecast.reducer'
import { Forecast } from './interfaces'

export const setForecastThunkAction =
  (data: Forecast[]): AppThunk =>
  async (dispatch) => {
    dispatch(setForecastHourly(data))
  }
