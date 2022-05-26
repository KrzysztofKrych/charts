import { Select } from 'antd'
import { HARDCODED_CITIES } from '../../../services/forecast/consts'
import { Coords } from '../../../services/forecast/interfaces'
import { useAppSelector } from '../../../store'
import { forecastSelector } from '../../../store/forecast/forecast.reducer'
import { COLORS } from '../../../styles/colors'
import { ParagraphError, StyledButton, StyledFlex, StyledInput, StyledSelect } from '../../../styles/styled-components'
import { LoadingSpinner } from '../LoadingSpinner'

interface Props {
  handleUpdateStateCoordinates: (coords: Coords) => void
  handleChangeCoordinates: () => void
  handleChangeSelect: (value: string) => void
  handleDetectUserLocation: () => void
  stateCoordinates: Coords
  error: string
  isRequesting: boolean
}

export const SelectCoordinatesDesktop = ({
  handleUpdateStateCoordinates,
  handleChangeCoordinates,
  handleChangeSelect,
  handleDetectUserLocation,
  stateCoordinates,
  error,
  isRequesting,
}: Props) => {
  const { coordinates } = useAppSelector(forecastSelector)

  return (
    <>
      <StyledFlex width='100%' padding='1rem 1rem 0 1rem'>
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
