import { Button, Input, Select, Typography } from 'antd'
import styled from 'styled-components'
import { COLORS } from './colors'

export const StyledFlex = styled.div<{
  direction?: string
  justifycontent?: string
  aligncontent?: string
  alignitems?: string
  padding?: string
  width?: string
}>`
  display: flex;
  justify-content: ${(props) => (props.justifycontent ? props.justifycontent : 'center')};
  align-items: ${(props) => (props.alignitems ? props.alignitems : 'center')};
  align-content: ${(props) => (props.aligncontent ? props.aligncontent : 'center')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
`

export const StyledInput = styled(Input)<{ radius?: string; width?: string; margin?: string }>`
  width: ${(props) => props.width};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '0px')};
  margin: ${(props) => props.margin};
`

export const StyledSelect = styled(Select)<{ padding?: string; margin?: string }>`
  width: 100%;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`

export const StyledButton = styled(Button)<{ color?: string; background?: string; radius?: string; margin?: string }>`
  color: ${(props) => (props.color ? props.color : COLORS.GREEN)};
  background: ${(props) => (props.background ? props.background : COLORS.PRIMARY)};
  border-radius: ${(props) => (props.radius ? props.radius : '8px')};
  font-weight: 400;
  border: none;
  margin: ${(props) => props.margin};

  &:hover,
  &:active,
  &:focus {
    color: ${(props) => (props.color ? props.color : COLORS.GREEN)};
    background: ${(props) => (props.background ? props.background : COLORS.PRIMARY)};
  }
`
export const ParagraphError = styled.p<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : COLORS.RED)};
  font-size: 11px;
  margin: 0 0 5px 0;
  padding: 0;
`
export const StyledText = styled(Typography.Text)<{
  size: string
  padding?: string
  color?: string
  weight?: string
  margin?: string
}>`
  display: inline-block;
  font-size: ${(props) => props.size}px;
  color: ${(props) => (props.color ? props.color : COLORS.WHITE)};
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
  margin: ${(props) => (props.margin ? props.margin : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0')};

  &.ant-typography-disabled {
    opacity: 0.5;
    color: ${() => COLORS.GREY};
    pointer-events: none;
  }
`
