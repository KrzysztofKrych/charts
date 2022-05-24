import { useAppSelector } from './store'
import { dataSelector } from './store/data/data.reducer'

function App() {
  const { data } = useAppSelector(dataSelector)
  return <div className='App'>test: {data.map((str) => str)}</div>
}

export default App
