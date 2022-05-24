import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { forecastSelector } from './store/forecast/forecast.reducer'
import { ForecastService } from './services/forecast/ForecastService'

function App() {
  const { temperature } = useAppSelector(forecastSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    ForecastService.getForecast(dispatch)
  }, [])

  return <div className='App'>test: {temperature.map((num) => num)}</div>
}

export default App
