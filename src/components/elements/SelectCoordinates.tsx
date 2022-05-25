import { COLORS } from '../../styles/colors'
import { StyledButton, StyledFlex, StyledInput, StyledSelect } from '../../styles/styled-components'

export const SelectCoordinates = () => (
  <StyledFlex width='100%' padding='1rem'>
    <StyledInput placeholder='latitude' margin='1rem' />
    <StyledInput placeholder='longitude' margin='1rem' />
    <StyledSelect margin='1rem' />
    <StyledButton margin='1rem' background={COLORS.GREEN} color={COLORS.PRIMARY}>
      Check
    </StyledButton>
    <StyledButton margin='1rem'>Detect your position</StyledButton>
  </StyledFlex>
)
