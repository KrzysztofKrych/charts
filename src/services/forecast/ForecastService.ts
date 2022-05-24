import axios from 'axios'
import moment from 'moment'
import { AppDispatch } from '../../store'
import { setForecastThunkAction } from '../../store/forecast/forecast.thunk'
import { FORECAST_API_URL } from './consts'
import { RawForecastResponse } from './interfaces'

export class ForecastService {
  public static async getForecast(dispatch: AppDispatch) {
    const { data } = await axios.get<RawForecastResponse>(
      `${FORECAST_API_URL}?latitude=52.52&longitude=13.41&hourly=temperature_2m&timeformat=unixtime`
    ) // TODO DYNAMIC VALUES

    dispatch(
      setForecastThunkAction(
        data.hourly.temperature_2m.map((element, index) => ({
          temperature: element,
          time: moment.unix(data.hourly.time[index]).format('MMM Do HH:mm'),
        }))
      )
    )
  }
}
