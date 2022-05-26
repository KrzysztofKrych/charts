import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useAppSelector } from '../../../store'
import { forecastSelector } from '../../../store/forecast/forecast.reducer'

export const CustomLineChartMobile = () => {
  const { forecastsHourly } = useAppSelector(forecastSelector)

  return (
    <LineChart width={window.innerWidth - 20} margin={{ left: -20 }} height={300} data={forecastsHourly}>
      <Line type='monotone' dataKey='temperature' stroke='#8884d8' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <Tooltip />
    </LineChart>
  )
}
