import { AppDispatch } from '../../store'
import { ForecastService } from '../forecast/ForecastService'

export class GeolocationService {
  public static async getCustomerLocation(dispatch: AppDispatch): Promise<boolean> {
    try {
      const {
        coords: { longitude, latitude },
      } = await GeolocationService.getCustomerPosition()
      return await ForecastService.getForecast(dispatch, { lat: latitude, lng: longitude, label: '' })
    } catch (e) {
      return false
    }
  }

  public static async getCustomerPosition(): Promise<Record<string, { latitude: number; longitude: number }>> {
    const fallbackOptions = {
      maximumAge: 1000 * 60 * 3,
      timeout: 1000 * 5,
      enableHighAccuracy: true,
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation?.getCurrentPosition(resolve, reject, fallbackOptions)
    })
  }
}
