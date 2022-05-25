import 'antd/dist/antd.css'
import { useEffect } from 'react'
import { useAppDispatch } from './store'
import { ForecastService } from './services/forecast/ForecastService'
import { WARSAW_COORDS } from './services/forecast/consts'
import { MainLayout } from './components/views/MainLayout'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    ForecastService.getForecast(dispatch, WARSAW_COORDS)
  }, [])

  return (
    <div className='App'>
      <MainLayout />
    </div>
  )
}

export default App
