import { Route, Routes } from 'react-router-dom'
import { HomeView } from '../views/HomeView'

export function ReactRouterView () {
  return (
    <Routes>
      <Route
        path='/'
        element={<HomeView />}
      />
    </Routes>
  )
}
