import { useEffect, useState } from 'react'
import { ForecastService } from '../../services/forecast/ForecastService'
import { Coords } from '../../services/forecast/interfaces'
import { useAppDispatch, useAppSelector } from '../../store'
import { forecastSelector } from '../../store/forecast/forecast.reducer'
import { COLORS } from '../../styles/colors'
import { StyledButton, StyledFlex, StyledInput, StyledSelect } from '../../styles/styled-components'

export const SelectCoordinates = () => {
  const { coordinates } = useAppSelector(forecastSelector)
  const dispatch = useAppDispatch()
  const [stateCoordinates, setStateCoordinates] = useState<Coords>(coordinates)

  const handleUpdateStateCoordinates = (coords: Coords) => {
    setStateCoordinates(coords)
  }

  const handleChangeCoordinates = () => {
    ForecastService.getForecast(dispatch, stateCoordinates)
  }

  useEffect(() => {
    setStateCoordinates(coordinates)
  }, [coordinates])

  return (
    <StyledFlex width='100%' padding='1rem'>
      <StyledInput
        type='number'
        onChange={(event) => handleUpdateStateCoordinates({ ...stateCoordinates, lat: Number(event.target.value) })}
        value={stateCoordinates.lat}
        placeholder='latitude'
        margin='1rem'
      />

      {/* TODO ADD LABELS TO INPUTS */}
      <StyledInput
        type='number'
        onChange={(event) => handleUpdateStateCoordinates({ ...stateCoordinates, lng: Number(event.target.value) })}
        value={stateCoordinates.lng}
        placeholder='longitude'
        margin='1rem'
      />
      <StyledSelect margin='1rem' />
      <StyledButton onClick={handleChangeCoordinates} margin='1rem' background={COLORS.GREEN} color={COLORS.PRIMARY}>
        Check
      </StyledButton>
      <StyledButton margin='1rem'>Detect your position</StyledButton>
    </StyledFlex>
  )
}
