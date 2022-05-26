import { StyledFlex } from '../../styles/styled-components'
import { CustomLineChartContainer } from '../elements/LineChart/LineChartContainer'
import { SelectCoordinates } from '../elements/SelectCoordinates/SelectCoordinates'

export const MainLayout = () => (
  <StyledFlex direction='column' width='100%'>
    <SelectCoordinates />
    <CustomLineChartContainer />
  </StyledFlex>
)
