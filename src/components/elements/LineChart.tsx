import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useAppSelector } from '../../store'
import { forecastSelector } from '../../store/forecast/forecast.reducer'

export const CustomLineChart = () => {
  const { forecastsHourly } = useAppSelector(forecastSelector)

  return (
    <LineChart
      width={window.innerWidth - 100}
      height={400}
      data={forecastsHourly}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <Line type='monotone' dataKey='temperature' stroke='#8884d8' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <Tooltip />
    </LineChart>
  )
}
