import { BrowserRouter } from 'react-router-dom'
import { ReactRouterView } from './routes/index'
import { HeaderHome } from './components/HeaderHome'
import { Navegation } from './components/Navegation'

export function App () {
  return (
    <BrowserRouter>
      <HeaderHome />
      <Navegation />
      <ReactRouterView />
    </BrowserRouter>
  )
}
