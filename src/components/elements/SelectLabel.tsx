import { CSSProperties, ReactElement } from 'react'
import { COLORS } from '../../styles/colors'
import { StyledFlex, StyledSelect, StyledText } from '../../styles/styled-components'

interface Props {
  value: string
  options: ReactElement[]
  title: string
  onChange?: (value: unknown) => void
  showArrow?: boolean
  selectStyle?: CSSProperties
}

export const SelectLabel = ({ value, options, title, onChange, showArrow = true, selectStyle }: Props) => (
  <StyledFlex padding='1rem' direction='column' justifycontent='space-between' width='100%'>
    <StyledText padding='0 .5rem 0  0' style={{ whiteSpace: 'nowrap' }} size='16' color={COLORS.PRIMARY}>
      {title}
    </StyledText>
    <StyledSelect style={selectStyle} onChange={onChange} showArrow={showArrow} value={value}>
      {options}
    </StyledSelect>
  </StyledFlex>
)
