import { useEffect, useState } from 'react'
import { HARDCODED_CITIES } from '../../../services/forecast/consts'
import { ForecastService } from '../../../services/forecast/ForecastService'
import { Coords } from '../../../services/forecast/interfaces'
import { GeolocationService } from '../../../services/geolocation/GeolocationService'
import { useAppDispatch, useAppSelector } from '../../../store'
import { forecastSelector } from '../../../store/forecast/forecast.reducer'
import { DEFAULT_ERROR, GOELOCATION_ERROR } from '../../../utils/consts'
import { GetDevice } from '../../hoc/GetDevice'
import { SelectCoordinatesDesktop } from './SelectCoordinatesDesktop'
import { SelectCoordinatesMobile } from './SelectCoordinatesMobile'

export const SelectCoordinates = () => {
  const { coordinates } = useAppSelector(forecastSelector)
  const dispatch = useAppDispatch()
  const [stateCoordinates, setStateCoordinates] = useState<Coords>(coordinates)
  const [isRequesting, setIsRequesting] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleSetError = (error: string) => {
    setError(error)
  }

  const handleUpdateStateCoordinates = (coords: Coords) => {
    handleSetError('')
    setStateCoordinates(coords)
  }

  const handleChangeSelect = (city: string) => {
    handleSetError('')
    const hardcodedCity = HARDCODED_CITIES.find((hardcodedCity) => hardcodedCity.label === city)
    hardcodedCity && handleUpdateStateCoordinates(hardcodedCity) // TODO INFO TO USER IF NOT FOUND
  }

  const handleChangeCoordinates = async () => {
    setIsRequesting(true)
    const response = await ForecastService.getForecast(dispatch, stateCoordinates)
    !response && handleSetError(DEFAULT_ERROR)
    setIsRequesting(false)
  }

  const handleDetectUserLocation = async () => {
    setIsRequesting(true)
    const response = await GeolocationService.getCustomerLocation(dispatch)
    !response && handleSetError(GOELOCATION_ERROR)
    setIsRequesting(false)
  }

  useEffect(() => {
    setStateCoordinates(coordinates)
  }, [coordinates])

  return GetDevice(
    <SelectCoordinatesDesktop
      handleChangeCoordinates={handleChangeCoordinates}
      handleChangeSelect={handleChangeSelect}
      handleDetectUserLocation={handleDetectUserLocation}
      handleUpdateStateCoordinates={handleUpdateStateCoordinates}
      stateCoordinates={stateCoordinates}
      error={error}
      isRequesting={isRequesting}
    />,
    <SelectCoordinatesMobile
      handleChangeCoordinates={handleChangeCoordinates}
      handleChangeSelect={handleChangeSelect}
      handleDetectUserLocation={handleDetectUserLocation}
      handleUpdateStateCoordinates={handleUpdateStateCoordinates}
      stateCoordinates={stateCoordinates}
      error={error}
      isRequesting={isRequesting}
    />
  )
}
