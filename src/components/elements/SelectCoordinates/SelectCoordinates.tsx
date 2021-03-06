import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { HARDCODED_CITIES } from '../../../services/forecast/consts'
import { ForecastService } from '../../../services/forecast/ForecastService'
import { Coords } from '../../../services/forecast/interfaces'
import { GeolocationService } from '../../../services/geolocation/GeolocationService'
import { useAppDispatch, useAppSelector } from '../../../store'
import { forecastSelector } from '../../../store/forecast/forecast.reducer'
import { COLORS } from '../../../styles/colors'
import { ParagraphError, StyledButton, StyledFlex } from '../../../styles/styled-components'
import { DEFAULT_ERROR, GOELOCATION_ERROR } from '../../../utils/consts'
import { InputLabel } from '../InputLabel'
import { LoadingSpinner } from '../LoadingSpinner'
import { SelectLabel } from '../SelectLabel'

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

  return (
    <>
      <StyledFlex width='100%' padding='1rem 1rem 0 1rem' direction={isMobile ? 'column' : 'row'} alignitems='flex-end'>
        <InputLabel
          style={{ padding: '1rem 1rem 0 1rem' }}
          title='Latitude'
          inputStyle={{
            border: !Number.isNaN(stateCoordinates.lat) ? '' : `1px solid ${COLORS.RED}`,
            margin: '1rem',
          }}
          inputType='number'
          onChange={(event) =>
            handleUpdateStateCoordinates({ ...stateCoordinates, lat: Number(event.target.value), label: '' })
          }
          inputValue={stateCoordinates.lat}
          placeholder='latitude'
        />

        <InputLabel
          style={{ padding: '1rem 1rem 0 1rem' }}
          title='Longitude'
          inputStyle={{
            border: !Number.isNaN(stateCoordinates.lng) ? '' : `1px solid ${COLORS.RED}`,
            margin: '1rem',
          }}
          inputType='number'
          onChange={(event) =>
            handleUpdateStateCoordinates({ ...stateCoordinates, lng: Number(event.target.value), label: '' })
          }
          inputValue={stateCoordinates.lng}
          placeholder='longitude'
        />
        <SelectLabel
          value={stateCoordinates.label || 'Choose city'}
          onChange={(value: unknown) => handleChangeSelect(value as string)}
          options={HARDCODED_CITIES.map((coords) => (
            <Select.Option key={coords.label}>{coords.label}</Select.Option>
          ))}
          selectStyle={{ margin: '1rem 1rem 0 1rem' }}
          title='City'
        />
        <StyledButton
          disabled={
            !!error ||
            isRequesting ||
            (coordinates.lat === stateCoordinates.lat && coordinates.lng === stateCoordinates.lng)
          }
          onClick={handleChangeCoordinates}
          margin='1rem'
          background={COLORS.GREEN}
          color={COLORS.PRIMARY}
        >
          {isRequesting ? <LoadingSpinner fontSize='1rem' /> : 'Check'}
        </StyledButton>
        <StyledButton onClick={handleDetectUserLocation} margin='1rem'>
          Detect your position
        </StyledButton>
      </StyledFlex>

      <StyledFlex justifycontent='flex-end' width='100%' padding='0 1rem'>
        {error && <ParagraphError>{error}</ParagraphError>}
      </StyledFlex>
    </>
  )
}
