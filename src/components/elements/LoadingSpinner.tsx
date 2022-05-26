import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

interface IProps {
  fontSize?: string
  color?: string
}

const AntIcon = ({ fontSize = '3rem', color }: IProps) => <LoadingOutlined style={{ fontSize, color }} spin />

export const LoadingSpinner = ({ fontSize, color }: IProps) => (
  <Spin indicator={<AntIcon color={color} fontSize={fontSize} />} />
)
