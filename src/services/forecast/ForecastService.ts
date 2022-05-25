import axios from 'axios'
import moment from 'moment'
import { AppDispatch } from '../../store'
import { setCoordinates } from '../../store/forecast/forecast.reducer'
import { setForecastThunkAction } from '../../store/forecast/forecast.thunk'
import { FORECAST_API_URL } from './consts'
import { Coords, RawForecastResponse } from './interfaces'

export class ForecastService {
  public static async getForecast(dispatch: AppDispatch, coords: Coords) {
    const { data } = await axios.get<RawForecastResponse>(
      `${FORECAST_API_URL}?latitude=${coords.lat}&longitude=${coords.lng}&hourly=temperature_2m&timeformat=unixtime`
    )

    dispatch(setCoordinates(coords))

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
