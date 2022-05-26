import { StyledFlex } from '../../styles/styled-components'
import { CustomLineChart } from '../elements/LineChart/LineChart'
import { SelectCoordinates } from '../elements/SelectCoordinates/SelectCoordinates'

export const MainLayout = () => (
  <StyledFlex direction='column' width='100%'>
    <SelectCoordinates />
    <CustomLineChart />
  </StyledFlex>
)
