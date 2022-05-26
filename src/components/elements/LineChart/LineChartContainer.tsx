import { GetDevice } from '../../hoc/GetDevice'
import { CustomLineChartDesktop } from './LineChartDesktop'
import { CustomLineChartMobile } from './LineChartMobile'

export const CustomLineChartContainer = () => GetDevice(<CustomLineChartDesktop />, <CustomLineChartMobile />)
