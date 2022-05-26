import { GetDevice } from '../../hoc/GetDevice'
import { CustomLineChartDesktop } from './LineChartDesktop'
import { CustomLineChartMobile } from './LineChartMobile'

export const CustomLineChart = () => GetDevice(<CustomLineChartDesktop />, <CustomLineChartMobile />)
