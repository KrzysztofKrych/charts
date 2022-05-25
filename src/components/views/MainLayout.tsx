import { StyledFlex } from '../../styles/styled-components'
import { CustomLineChart } from '../elements/LineChart'
import { SelectCoordinates } from '../elements/SelectCoordinates'

export const MainLayout = () => (
  <StyledFlex direction='column' width='100%'>
    <SelectCoordinates />
    <CustomLineChart />
  </StyledFlex>
)
