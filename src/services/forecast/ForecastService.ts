import axios from 'axios'
import { AppDispatch } from '../../store'
import { setTemperatureThunkAction, setTimeThunkAction } from '../../store/forecast/forecast.thunk'
import { FORECAST_API_URL } from './consts'
import { RawForecastResponse } from './interfaces'

export class ForecastService {
  public static async getForecast(dispatch: AppDispatch) {
    const { data } = await axios.get<RawForecastResponse>(
      `${FORECAST_API_URL}?latitude=52.52&longitude=13.41&hourly=temperature_2m`
    ) // TODO DYNAMIC VALUES
    dispatch(setTemperatureThunkAction(data.hourly.temperature_2m))
    dispatch(setTimeThunkAction(data.hourly.time))
  }
}
