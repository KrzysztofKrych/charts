import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { useAppSelector } from '../../store'
import { forecastSelector } from '../../store/forecast/forecast.reducer'

export const CustomLineChart = () => {
  const { temperature } = useAppSelector(forecastSelector)

  return (
    <LineChart
      width={window.innerWidth}
      height={400}
      data={temperature}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <Line type='monotone' dataKey={(v) => v} stroke='#8884d8' />
      <YAxis />
      <XAxis dataKey={(v) => v} />
      <Tooltip />
    </LineChart>
  )
}
