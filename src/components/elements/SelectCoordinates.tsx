import { Select } from 'antd'
import { useEffect, useState } from 'react'
import { HARDCODED_CITIES } from '../../services/forecast/consts'
import { ForecastService } from '../../services/forecast/ForecastService'
import { Coords } from '../../services/forecast/interfaces'
import { useAppDispatch, useAppSelector } from '../../store'
import { forecastSelector } from '../../store/forecast/forecast.reducer'
import { COLORS } from '../../styles/colors'
import { ParagraphError, StyledButton, StyledFlex, StyledInput, StyledSelect } from '../../styles/styled-components'
import { LoadingSpinner } from './LoadingSpinner'

export const SelectCoordinates = () => {
  const { coordinates } = useAppSelector(forecastSelector)
  const dispatch = useAppDispatch()
  const [stateCoordinates, setStateCoordinates] = useState<Coords>(coordinates)
  const [isRequesting, setIsRequesting] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleSetError = (isError: boolean) => {
    setError(isError)
  }

  const handleUpdateStateCoordinates = (coords: Coords) => {
    handleSetError(false)
    setStateCoordinates(coords)
  }

  const handleChangeSelect = (city: string) => {
    handleSetError(false)
    const hardcodedCity = HARDCODED_CITIES.find((hardcodedCity) => hardcodedCity.label === city)
    hardcodedCity && handleUpdateStateCoordinates(hardcodedCity) // TODO INFO TO USER IF NOT FOUND
  }

  const handleChangeCoordinates = async () => {
    setIsRequesting(true)
    const response = await ForecastService.getForecast(dispatch, stateCoordinates)
    handleSetError(!response)
    setIsRequesting(false)
  }

  useEffect(() => {
    setStateCoordinates(coordinates)
  }, [coordinates])

  return (
    <>
      <StyledFlex width='100%' padding='1rem 1rem 0 1rem'>
        {/*  ADD MAXIMUM AND MINIMUM VALUES */}
        <StyledInput
          style={{
            border: !Number.isNaN(stateCoordinates.lat) ? '' : `1px solid ${COLORS.RED}`,
          }}
          type='number'
          onChange={(event) =>
            handleUpdateStateCoordinates({ ...stateCoordinates, lat: Number(event.target.value), label: '' })
          }
          value={stateCoordinates.lat}
          placeholder='latitude'
          margin='1rem'
        />

        {/* TODO ADD LABELS TO INPUTS */}
        <StyledInput
          style={{
            border: !Number.isNaN(stateCoordinates.lng) ? '' : `1px solid ${COLORS.RED}`,
          }}
          type='number'
          onChange={(event) =>
            handleUpdateStateCoordinates({ ...stateCoordinates, lng: Number(event.target.value), label: '' })
          }
          value={stateCoordinates.lng}
          placeholder='longitude'
          margin='1rem'
        />
        <StyledSelect
          margin='1rem'
          value={stateCoordinates.label || 'Choose city'}
          onChange={(value) => handleChangeSelect(value as string)}
        >
          {HARDCODED_CITIES.map((coords) => (
            <Select.Option key={coords.label}>{coords.label}</Select.Option>
          ))}
        </StyledSelect>
        <StyledButton
          disabled={
            error ||
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
        <StyledButton margin='1rem'>Detect your position</StyledButton>
      </StyledFlex>

      <StyledFlex justifycontent='flex-end' width='100%' padding='0 1rem'>
        {error && <ParagraphError>Something went wrong. Please try again or change coordinates</ParagraphError>}
      </StyledFlex>
    </>
  )
}
