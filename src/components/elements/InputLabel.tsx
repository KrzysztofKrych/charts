import { CSSProperties, FocusEvent } from 'react'
import { COLORS } from '../../styles/colors'
import { StyledFlex, StyledInput, StyledText } from '../../styles/styled-components'

interface Props {
  inputValue: string | number
  inputType: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  title: string
  placeholder?: string
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void
  inputWidth?: string
  style?: CSSProperties
  inputStyle?: CSSProperties
  min?: number
}

export const InputLabel = ({
  inputValue,
  onChange,
  inputType = 'text',
  placeholder,
  title,
  onBlur,
  inputWidth,
  style,
  inputStyle,
  min,
}: Props) => (
  <StyledFlex justifycontent='space-between' width='100%' style={style}>
    <StyledText padding='0 .5rem 0  0' style={{ whiteSpace: 'nowrap' }} size='16' color={COLORS.PRIMARY}>
      {title}
    </StyledText>
    <StyledInput
      style={inputStyle}
      width={inputWidth}
      onBlur={onBlur}
      value={inputValue}
      onChange={onChange}
      type={inputType}
      placeholder={placeholder}
      min={min}
    />
  </StyledFlex>
)
