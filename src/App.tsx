import { useEffect } from 'react'
import { useAppDispatch } from './store'
import { ForecastService } from './services/forecast/ForecastService'
import { CustomLineChart } from './components/elements/LineChart'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    ForecastService.getForecast(dispatch)
  }, [])

  return (
    <div className='App'>
      <CustomLineChart />
    </div>
  )
}

export default App
